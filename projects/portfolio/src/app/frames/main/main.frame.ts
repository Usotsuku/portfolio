import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideMoon, LucideSun } from '@lucide/angular';
import { CursorOrbitService, MotionPreferencesService, SmoothScrollService, ThemeService } from '@services/index';
import { SkeletonImageWidget } from '@widgets/skeleton-image';
import { portfolioContent } from '@config/portfolio.config';
import { mainNavigationItems } from './main.config';

@Component({
  selector: 'awp-main',
  standalone: true,
  imports: [RouterOutlet, LucideMoon, LucideSun, SkeletonImageWidget],
  templateUrl: './main.frame.html',
  styleUrl: './main.frame.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainFrame {
  private readonly _cursor = inject(CursorOrbitService);
  private readonly _motion = inject(MotionPreferencesService);
  private readonly _scroll = inject(SmoothScrollService);

  protected readonly menu = mainNavigationItems;
  protected readonly profile = portfolioContent.profile;
  protected readonly theme = inject(ThemeService);

  constructor() {
    afterNextRender(() => {
      this._motion.init();
      this._scroll.init();
      this._cursor.init();
    });
  }
}

