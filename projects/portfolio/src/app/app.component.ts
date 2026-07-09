import { ChangeDetectionStrategy, Component, afterNextRender, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SkeletonWidget } from '@widgets/skeleton';

@Component({
  selector: 'awp-root',
  standalone: true,
  imports: [RouterOutlet, SkeletonWidget],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly _router = inject(Router);
  protected readonly isNavigating = signal(true);

  constructor() {
    afterNextRender(() => {
      this._router.events
        .pipe(
          filter(
            (e): e is NavigationStart | NavigationEnd =>
              e instanceof NavigationStart || e instanceof NavigationEnd
          )
        )
        .subscribe((event) => {
          if (event instanceof NavigationStart) {
            this.isNavigating.set(true);
          } else {
            this.isNavigating.set(false);
          }
        });
    });
  }
}
