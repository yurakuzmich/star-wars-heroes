import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { User } from '../models';

export const selectAppState = createFeatureSelector<AppState>('app');

export const isLoggedIn = createSelector(
    selectAppState,
    (state: AppState) => !!state.isLoggedIn
);

export const selectCurrentUser = createSelector(
  selectAppState,
  (state: AppState) => state.currentUser
);

export const selectUsers = createSelector(
  selectAppState,
  (state: AppState) => state.users
);

export const selectUser = (userId: number) => createSelector(
  selectUsers,
  (users: User[]) => users.find(user => user.id === userId)
);

