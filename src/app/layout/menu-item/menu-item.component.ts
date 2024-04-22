import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  animations: [],
})
export class MenuItemComponent {
  @Input() props!: MenuItem;

  @ViewChild('menuLink') menuLink!: ElementRef;

  isSelected: boolean = false;

  isActive(): boolean {
    return this.menuLink.nativeElement.classList.contains('active');
  }

  onClick() {
    this.isSelected = !this.isActive();
    // console.log(this.isSelected);
  }
}
