import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { SkeletonWidget } from '@widgets/skeleton';

@Component({
  selector: 'awp-skeleton-video',
  standalone: true,
  imports: [SkeletonWidget],
  templateUrl: './skeleton-video.widget.html',
  styleUrl: './skeleton-video.widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonVideoWidget {
  readonly src = input.required<string>();
  readonly isMobile = input(false);

  protected readonly loading = signal(true);

  protected onReady(): void {
    this.loading.set(false);
  }
}
