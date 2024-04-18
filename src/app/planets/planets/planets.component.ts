import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ApiResources } from '../../models/api-resources';
import { SWItemCardField, SWPlanet } from '../../models';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {
  public title = 'Star Wars Planets';
  public planets: SWPlanet[] = [];
  public loading = true;
  public error = false;
  public fields: SWItemCardField[] = [
    {
      title: 'Name',
      fieldName: 'name',
    },
    {
      title: 'Diameter',
      fieldName: 'diameter',
    },
    {
      title: 'Population',
      fieldName: 'population',
    },
    {
      title: 'Climate',
      fieldName: 'climate',
    }
  ];
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
