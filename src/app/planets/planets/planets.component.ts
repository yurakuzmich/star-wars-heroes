import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ApiResources } from '../../models/api-resources';
import { SWPlanet } from '../../models';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {
  public title = 'Star Wars Heroes';
  public planets: SWPlanet[] = [];
  public loading = true;
  public error = false;
  private APISubscription!: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.APISubscription = this.apiService.getItems<SWPlanet>(ApiResources.Planets, {}).subscribe(data => {
      this.planets = data.results;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.APISubscription.unsubscribe();
  }
}
