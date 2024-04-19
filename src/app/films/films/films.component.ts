import { Component } from '@angular/core';
import { ApiResources, SWFilm, SWHero, SWItemCardField } from '../../models';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {
  public title = 'Star Wars Heroes';
  public films: SWFilm[] = [];
  public loading = true;
  public error = false;
  public fields: Array<SWItemCardField<SWFilm>> = [
    {
      title: 'Episode ID',
      fieldName: 'episode_id',
    },
    {
      title: 'Director',
      fieldName: 'director',
    },
    {
      title: 'Producer',
      fieldName: 'producer',
    },
    {
      title: 'Release Date',
      fieldName: 'release_date',
    }
  ];
  private APISubscription!: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.APISubscription = this.apiService.getItems<SWFilm>(ApiResources.Films, {}).subscribe(data => {
      this.films = data.results;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.APISubscription.unsubscribe();
  }
}
