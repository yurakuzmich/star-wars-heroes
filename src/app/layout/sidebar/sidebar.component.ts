import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  logoutLink: MenuItem = {
    title: 'Logout',
    link: 'logout',
    class: 'logout',
    label: null,
  };

  constructor(private loginService: LoginService) {}

  logOut() {
    this.loginService.logOut();
  }
}
