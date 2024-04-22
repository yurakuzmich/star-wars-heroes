import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'star-wars-app';

  isUserLoggedIn = false;
  isUserLoggedIn$!: Observable<boolean>;
  isUserLoggedInSubscription!: Subscription;
}
