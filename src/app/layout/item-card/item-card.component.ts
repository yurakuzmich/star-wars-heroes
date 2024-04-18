import { Component, Input } from '@angular/core';
import { SWItem } from '../../models';
import { SWFilm } from '../../models';

@Component({
  standalone: true,
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})

export class ItemCardComponent {
  @Input() item!: SWItem;

  title!: string;

  constructor() {}

  ngOnInit() {
    this.title = this.isFilm(this.item) ? this.item.title : this.item.name;
  }

  isFilm(item: SWItem): item is SWFilm {
    return (item as SWFilm).title !== undefined;
  }
}
