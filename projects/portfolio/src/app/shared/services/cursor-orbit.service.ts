import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { animate } from 'motion';
import { MotionPreferencesService } from './motion-preferences.service';

type MotionAnimate = (element: HTMLElement, keyframes: Record<string, number>, options: Record<string, number | string>) => void;

@Injectable({ providedIn: 'root' })
export class CursorOrbitService {
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _zone = inject(NgZone);
  private readonly _motion = inject(MotionPreferencesService);

  init(): void {
    if (!isPlatformBrowser(this._platformId) || this._motion.reducedMotion()) {
      return;
    }

    const cursor = this._document.querySelector<HTMLElement>('[data-cursor-orbit]');
    if (!cursor) {
      return;
    }

    this._zone.runOutsideAngular(() => {
      this._document.addEventListener('pointermove', (event: PointerEvent) => {
        cursor.style.transform = `translate3d(${event.clientX - 12}px, ${event.clientY - 12}px, 0)`;
        (animate as MotionAnimate)(cursor, { opacity: 0.72 }, { duration: 0.22, easing: 'ease-out' });
      });
    });
  }
}
