import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from './models';
import { Store, select } from '@ngrx/store';
import { LoginService } from './services/login.service';
import { loadInitialData } from './state/actions';

import { users as USERS } from './mock-data/site-users';
import { isLoggedIn, selectCurrentUser } from './state/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'star-wars-app';
  subscriptions: Subscription[] = [];

  isUserLoggedIn = false;
  isUserLoggedIn$!: Observable<boolean>;
  isUserLoggedInSubscription!: Subscription;

  isModalOpen = true;
  isModalOpen$!: Observable<boolean>;
  isModalOpenSubscription!: Subscription;

  initialUsers = USERS;
  uinitialCurrentUser = USERS[0];

  // currentUser: User | null = null;
  // currentUser$!: Observable<User | null>;
  // currentUserSubscription!: Subscription;


  constructor(private store: Store, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loadAppInitialData();

    this.checkToken();

    this.isUserLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isUserLoggedInSubscription = this.isUserLoggedIn$.subscribe(isLoggedIn => this.isUserLoggedIn = isLoggedIn);
    this.subscriptions.push(this.isUserLoggedInSubscription);

    // this.currentUser$ = this.store.pipe(select(selectCurrentUser));
    // this.currentUserSubscription = this.currentUser$.subscribe(user => this.currentUser = user);
    // this.subscriptions.push(this.currentUserSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  checkToken() {
    const token = localStorage.getItem('authToken');
    if (!token) return;
    const userData = token.split(':');
    this.loginService.login(userData[0], userData[1]);
  }

  loadAppInitialData() {
    this.store.dispatch(loadInitialData({users: this.initialUsers, currentUser: this.uinitialCurrentUser}));
  }
}

