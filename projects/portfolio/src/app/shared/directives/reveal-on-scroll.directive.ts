import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Input, NgZone, OnDestroy, PLATFORM_ID, afterNextRender, inject, numberAttribute } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioTheme } from '@config/theme.config';
import { MotionPreferencesService } from '@services/motion-preferences.service';

@Directive({
  selector: '[awpRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnDestroy {
  @Input({ alias: 'awpRevealOnScroll', transform: numberAttribute }) delay = 0;

  private readonly _document = inject(DOCUMENT);
  private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly _motion = inject(MotionPreferencesService);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _zone = inject(NgZone);
  private _trigger?: ScrollTrigger;

  constructor() {
    afterNextRender(() => this._init());
  }

  ngOnDestroy(): void {
    this._trigger?.kill();
  }

  private _init(): void {
    if (!isPlatformBrowser(this._platformId) || this._motion.reducedMotion()) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const element = this._element.nativeElement;
    element.classList.add('reveal-ready');

    this._zone.runOutsideAngular(() => {
      this._trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 84%',
        once: true,
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: portfolioTheme.motion.revealDuration,
            delay: this.delay,
            ease: portfolioTheme.motion.ease,
            clearProps: 'transform'
          });
        }
      });
    });
  }
}
