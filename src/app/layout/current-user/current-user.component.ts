import { Component } from '@angular/core';
import { User } from '../../models';
import { selectCurrentUser } from '../../state/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrl: './current-user.component.scss'
})
export class CurrentUserComponent {
  currentUser$: Observable<User | null> = this.store.select(selectCurrentUser);

  constructor(private store: Store) {}
}
