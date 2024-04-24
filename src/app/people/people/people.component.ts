import { Component, OnDestroy, OnInit } from '@angular/core';
import { SWHero, SWPeople } from '../../models/people.model';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ApiResources } from '../../models/api-resources';
import { SWItemCardField } from '../../models';
import { Store, select } from '@ngrx/store';
import { selectAllState, selectCurrentUser } from '../../state/selectors';

const PAGE_SIZE = 3;

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
  public currentPage = 0;
  public pageSize = PAGE_SIZE;
  public isLastPage = false;
  state: any;
  public fields: Array<SWItemCardField<SWHero>> = [
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

  constructor(private apiService: ApiService, private store: Store) { }

  ngOnInit(): void {
    // this.APISubscription = this.apiService.getItems<SWHero>(ApiResources.People, {}).subscribe(data => {
    // this.APISubscription = this.apiService.getMockPeople(this.currentPage).subscribe(data => {
    //   this.people = data.results;
    //   this.loading = false;
    // });

    this.fetchData();
    this.state = this.store.pipe(select(selectCurrentUser)).subscribe(data => console.log(data));
  }

  ngOnDestroy(): void {
    this.APISubscription.unsubscribe();
  }

  goNextPage(event: Event) {
    event.preventDefault();
    this.currentPage++;
    this.fetchData();
  }

  goPreviousPage (event: Event) {
    event.preventDefault();
    this.currentPage = this.currentPage > 0 ? this.currentPage - 1 : 0;
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    // this.APISubscription = this.apiService.getItems<SWHero>(ApiResources.People, {}).subscribe(data => {
    this.APISubscription = this.apiService.getMockPeople(this.currentPage).subscribe(data => {

      if(Math.ceil((data.count / this.pageSize) - 1) <= this.currentPage) {
        this.isLastPage = true;
      } else {
        this.isLastPage = false;
      }

      this.people = data.results;
      this.loading = false;
    });
  }
}
