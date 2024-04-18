import { Component } from '@angular/core';
import { ApiResources, SWItemCardField, SWVehicle } from '../../models';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {
  public title = 'Star Wars Vehicles';
  public vehicles: SWVehicle[] = [];
  public loading = true;
  public error = false;
  public fields: SWItemCardField[] = [
    {
      title: 'Name',
      fieldName: 'name',
    },
    {
      title: 'Model',
      fieldName: 'model',
    },
    {
      title: 'Manufacturer',
      fieldName: 'manufacturer',
    },
    {
      title: 'Cost',
      fieldName: 'cost_in_credits',
    }
  ];
  private APISubscription!: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.APISubscription = this.apiService.getItems<SWVehicle>(ApiResources.Vehicles, {}).subscribe(data => {
      this.vehicles = data.results;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.APISubscription.unsubscribe();
  }
}
