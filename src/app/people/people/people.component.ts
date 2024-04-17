import { Component, OnInit } from '@angular/core';
import { SWHero } from '../../models/people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {

  public title = 'Star Wars Heroes';
  public people: SWHero[] = [];
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data.results;
    })
  }
}
