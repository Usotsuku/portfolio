import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'awp-section-shell',
  standalone: true,
  templateUrl: './section-shell.widget.html',
  styleUrl: './section-shell.widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionShellWidget {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
}
