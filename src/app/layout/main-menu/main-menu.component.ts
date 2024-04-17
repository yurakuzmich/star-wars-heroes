import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Home',
      link: '/',
      class: 'home',
      label: null
    },
    {
      title: 'People',
      link: '/people',
      class: 'people',
      label: null
    },
    {
      title: 'Planets',
      link: '/planets',
      class: 'planets',
      label: null
    },
    {
      title: 'Films',
      link: '/films',
      class: 'films',
      label: null
    },
    {
      title: 'Species',
      link: '/species',
      class: 'species',
      label: null
    },
    {
      title: 'Vehicles',
      link: '/vehicles',
      class: 'vehicles',
      label: null
    },
    {
      title: 'Starships',
      link: '/starships',
      class: 'starships',
      label: null
    },
  ];
}
