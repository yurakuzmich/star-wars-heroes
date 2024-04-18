import { Component, OnDestroy, OnInit } from '@angular/core';
import { SWHero } from '../../models/people.model';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ApiResources } from '../../models/api-resources';
import { SWItemCardField } from '../../models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit, OnDestroy {

  public title = 'Star Wars Heroes';
  public people: SWHero[] = [];
  public loading = true;
  public error = false;
  public fields: SWItemCardField[] = [
    {
      title: 'Name',
      fieldName: 'name',
    },
    {
      title: 'Birth Year',
      fieldName: 'birth_year',
    },
    {
      title: 'Gender',
      fieldName: 'gender',
    },
    {
      title: 'Height',
      fieldName: 'height',
    }
  ];
  private APISubscription!: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.APISubscription = this.apiService.getItems<SWHero>(ApiResources.People, {}).subscribe(data => {
      this.people = data.results;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.APISubscription.unsubscribe();
  }
}
