import { Component } from '@angular/core';
import { ApiResources, SWItemCardField, SWStarship } from '../../models';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent {
  public title = 'Star Wars Heroes';
  public starships: SWStarship[] = [];
  public loading = true;
  public error = false;
  public fields: Array<SWItemCardField<SWStarship>> = [
    {
      title: 'Model',
      fieldName: 'model',
    },
    {
      title: 'Manufacturer',
      fieldName: 'manufacturer',
    },
    {
      title: 'Cost in Credits',
      fieldName: 'cost_in_credits',
    },
    {
      title: 'Length',
      fieldName: 'length',
    },
    {
      title: 'Max Atmosphering Speed',
      fieldName: 'max_atmosphering_speed'
    },
  ];
  private APISubscription!: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.APISubscription = this.apiService.getItems<SWStarship>(ApiResources.Starships, {}).subscribe(data => {
      this.starships = data.results;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.APISubscription.unsubscribe();
  }
}
