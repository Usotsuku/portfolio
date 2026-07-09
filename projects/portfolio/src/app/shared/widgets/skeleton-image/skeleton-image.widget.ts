import { ChangeDetectionStrategy, Component, afterNextRender, ElementRef, inject, input, signal } from '@angular/core';
import { SkeletonWidget } from '@widgets/skeleton';

@Component({
  selector: 'awp-skeleton-image',
  standalone: true,
  imports: [SkeletonWidget],
  templateUrl: './skeleton-image.widget.html',
  styleUrl: './skeleton-image.widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonImageWidget {
  private readonly _el = inject(ElementRef);

  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly borderRadius = input<string>('0');
  readonly objectFit = input<string>('cover');

  protected readonly loading = signal(true);

  constructor() {
    afterNextRender(() => {
      const img: HTMLImageElement | null = this._el.nativeElement.querySelector('img');
      if (img?.complete) {
        this.loading.set(false);
      }
    });
  }

  protected onLoad(): void {
    this.loading.set(false);
  }

  protected onError(): void {
    this.loading.set(false);
  }
}
