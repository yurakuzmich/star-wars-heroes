import { Component, Input } from '@angular/core';
import { SWItem, SWItemCardField } from '../../models';
import { SWFilm } from '../../models';

@Component({
  standalone: true,
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})

export class ItemCardComponent <T extends SWItem> {
  @Input() item!: T; //TODO find a way to awoid any.
  @Input() fields: Array<SWItemCardField<T>> = [];

  title!: string;

  constructor() {}

  ngOnInit() {
    this.title = this.isFilm(this.item) ? this.item.title : this.item.name;
  }

  isFilm(item: SWItem): item is SWFilm {
    return (item as SWFilm).title !== undefined;
  }
}
