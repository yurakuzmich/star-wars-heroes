import { createReducer, on } from '@ngrx/store';
import { loadInitialData, loginUser, logoutUser } from './actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,

};

export const appReducer = createReducer(
  initialState,

  on(loadInitialData, (state, { users, currentUser }) => {
    return ({
      ...state,
      users,
      currentUser: null,
    })
  }),

  on(loginUser, (state, {user}) => {
    return ({
      ...state,
      currentUser: user,
      isLoggedIn: true,
    })
  }),

  on(logoutUser, (state) => {
    return ({
      ...state,
      isLoggedIn: false,
      currentUser: null,
      modal: {
        isOpen: false,
        type: null,
        taskId: null,
      }
    })
  }),
)
