import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
      gsap.registerPlugin(ScrollTrigger);

      this._lenis = new Lenis({
        duration: 1.05,
        easing: (value: number) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
        smoothWheel: true
      });

      this._lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => this._lenis?.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    });
  }
}
