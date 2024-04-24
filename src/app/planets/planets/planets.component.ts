import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ApiResources } from '../../models/api-resources';
import { SWItemCardField, SWPlanet } from '../../models';

const PAGE_SIZE = 3;

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit, OnDestroy{
  public title = 'Star Wars Planets';
  public planets: SWPlanet[] = [];
  public loading = true;
  public error = false;
  public currentPage = 0;
  public pageSize = PAGE_SIZE;
  public isLastPage = false;
  public fields: Array<SWItemCardField<SWPlanet>> = [
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
    // this.APISubscription = this.apiService.getItems<SWHero>(ApiResources.People, {}).subscribe(data => {
    // this.APISubscription = this.apiService.getMockPeople(this.currentPage).subscribe(data => {
    //   this.people = data.results;
    //   this.loading = false;
    // });

    this.fetchData();
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
    // this.APISubscription = this.apiService.getItems<SWPlanet>(ApiResources.Planets, {}).subscribe(data => {
    this.APISubscription = this.apiService.getMockPlanets(this.currentPage).subscribe(data => {

      if(Math.ceil((data.count / this.pageSize) - 1) <= this.currentPage) {
        this.isLastPage = true;
      } else {
        this.isLastPage = false;
      }

      this.planets = data.results;
      this.loading = false;
    });
  }
}
