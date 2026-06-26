import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'awp-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _theme = signal<ThemeMode>('dark');

  readonly theme = computed(() => this._theme());
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor() {
    this._init();
  }

  toggle(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  setTheme(theme: ThemeMode): void {
    this._theme.set(theme);
    this._apply(theme);

    if (isPlatformBrowser(this._platformId)) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }

  private _init(): void {
    if (!isPlatformBrowser(this._platformId)) {
      this._apply('dark');
      return;
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const theme: ThemeMode = storedTheme === 'light' ? 'light' : 'dark';
    this._theme.set(theme);
    this._apply(theme);
  }

  private _apply(theme: ThemeMode): void {
    const root = this._document.documentElement;
    root.dataset['theme'] = theme;
    root.style.colorScheme = theme;
  }
}
