import { Component, Input } from '@angular/core';
import { SWHero } from '../../models/people.model';

@Component({
  selector: 'app-swhero-card',
  templateUrl: './swhero-card.component.html',
  styleUrl: './swhero-card.component.scss'
})
export class SwheroCardComponent {
  @Input() hero!: SWHero;

  constructor() { }
}
