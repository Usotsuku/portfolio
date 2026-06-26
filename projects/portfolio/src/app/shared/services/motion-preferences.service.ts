import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MotionPreferencesService {
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _reducedMotion = signal(false);

  readonly reducedMotion = computed(() => this._reducedMotion());

  init(): void {
    if (!isPlatformBrowser(this._platformId)) {
      return;
    }

    const mediaQuery = this._document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery) {
      return;
    }

    this._reducedMotion.set(mediaQuery.matches);
    mediaQuery.addEventListener('change', (event) => this._reducedMotion.set(event.matches));
  }
}
