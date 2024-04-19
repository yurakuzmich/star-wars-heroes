import { Component } from '@angular/core';
import { ApiResources, SWItemCardField, SWSpecies } from '../../models';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent {
  public title = 'Star Wars Species';
  public species: SWSpecies[] = [];
  public loading = true;
  public error = false;
  public fields: Array<SWItemCardField<SWSpecies>> = [
    {
      title: 'Name',
      fieldName: 'name',
    },
    {
      title: 'Classification',
      fieldName: 'classification',
    },
    {
      title: 'Designation',
      fieldName: 'designation',
    },
    {
      title: 'Average Height',
      fieldName: 'average_height',
    },
    {
      title: 'Skin Colors',
      fieldName: 'skin_colors',
    }
  ];
  private APISubscription!: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.APISubscription = this.apiService.getItems<SWSpecies>(ApiResources.Species, {}).subscribe(data => {
      this.species = data.results;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.APISubscription.unsubscribe();
  }
}
