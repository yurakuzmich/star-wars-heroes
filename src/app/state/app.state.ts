import { User } from "../models";

export interface AppState {
  users: User[];
  currentUser: User | null;
  isLoggedIn: boolean;
}
