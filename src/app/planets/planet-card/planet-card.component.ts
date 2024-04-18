import { Component, Input } from '@angular/core';
import { SWPlanet } from '../../models';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrl: './planet-card.component.scss'
})
export class PlanetCardComponent {
  @Input() planet!: SWPlanet;
}
