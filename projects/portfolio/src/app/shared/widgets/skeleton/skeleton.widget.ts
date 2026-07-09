import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'awp-skeleton',
  standalone: true,
  templateUrl: './skeleton.widget.html',
  styleUrl: './skeleton.widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonWidget {
  readonly shape = input<'rect' | 'circle' | 'text'>('rect');
  readonly width = input<string>();
  readonly height = input<string>();
  readonly borderRadius = input<string>();
}
