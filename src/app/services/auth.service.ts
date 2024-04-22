import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isLoggedIn } from '../state/selectors';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store) { }

  async isLoggedIn(): Promise<boolean> {
    const isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    return await firstValueFrom(isLoggedIn$);
  }
}
