import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PortfolioMetric } from '@models/portfolio.model';

@Component({
  selector: 'awp-metric-card',
  standalone: true,
  templateUrl: './metric-card.widget.html',
  styleUrl: './metric-card.widget.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricCardWidget {
  readonly metric = input.required<PortfolioMetric>();
}
