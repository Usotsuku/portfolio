import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideCode2,
  LucideDownload,
  LucideLayers3,
  LucideMail,
  LucideNetwork
} from '@lucide/angular';
import { portfolioContent } from '@config/portfolio.config';
import { RevealOnScrollDirective } from '@directives/index';
import { SkeletonImageWidget } from '@widgets/skeleton-image';
import { SkeletonVideoWidget } from '@widgets/skeleton-video';
import { SectionShellWidget } from '@widgets/section-shell';

@Component({
  selector: 'awp-home',
  standalone: true,
  imports: [
    LucideArrowLeft,
    LucideArrowRight,
    LucideCode2,
    LucideDownload,
    LucideLayers3,
    LucideMail,
    LucideNetwork,
    RevealOnScrollDirective,
    SkeletonImageWidget,
    SkeletonVideoWidget,
    SectionShellWidget
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  animations: [
    trigger('pageEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('460ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  protected readonly content = portfolioContent;
  protected readonly activeProjectIndex = signal(0);
  protected readonly activeProject = computed(() => this.content.projects[this.activeProjectIndex()]);

  protected selectProject(index: number): void {
    this.activeProjectIndex.set(index);
  }

  protected nextProject(): void {
    this.activeProjectIndex.update((index) => (index + 1) % this.content.projects.length);
  }

  protected previousProject(): void {
    this.activeProjectIndex.update((index) => (index - 1 + this.content.projects.length) % this.content.projects.length);
  }
}
