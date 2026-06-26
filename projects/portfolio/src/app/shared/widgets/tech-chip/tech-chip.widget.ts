import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'awp-tech-chip',
  standalone: true,
  templateUrl: './tech-chip.widget.html',
  styleUrl: './tech-chip.widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechChipWidget {
  readonly label = input.required<string>();
}
