import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import Lenis from 'lenis';
import { MotionPreferencesService } from './motion-preferences.service';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private readonly _document = inject(DOCUMENT);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _zone = inject(NgZone);
  private readonly _motion = inject(MotionPreferencesService);
  private _lenis?: Lenis;

  init(): void {
    if (!isPlatformBrowser(this._platformId) || this._motion.reducedMotion()) {
      return;
    }

    this._zone.runOutsideAngular(() => {
      this._lenis = new Lenis({
        duration: 1.05,
        easing: (value: number) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
        smoothWheel: true
      });

      const raf = (time: number): void => {
        this._lenis?.raf(time);
        this._document.defaultView?.requestAnimationFrame(raf);
      };

      this._document.defaultView?.requestAnimationFrame(raf);
    });
  }
}
