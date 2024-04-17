import { Component, OnDestroy, OnInit } from '@angular/core';
import { SWHero } from '../../models/people.model';
import { PeopleService } from '../people.service';
import { Subscription } from 'rxjs';

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
  private peopleSubscription!: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleSubscription = this.peopleService.getPeople().subscribe(data => {
      this.people = data.results;
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
    this.peopleSubscription.unsubscribe();
  }
}
