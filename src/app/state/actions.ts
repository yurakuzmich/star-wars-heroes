import { createAction, props } from '@ngrx/store';
import { User } from '../models';

export const loadInitialData = createAction(
  '[App] Load Initial Data',
  props<{ users: User[]; currentUser: User | null }>()
);

export const loginUser = createAction(
  '[App] Login User',
  props<{ user: User }>()
);

export const logoutUser = createAction(
  '[App] Logout User',
);
