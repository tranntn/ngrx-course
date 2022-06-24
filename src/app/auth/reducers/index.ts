import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthAction} from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
    user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}


export const authReducer = createReducer(
  initialAuthState,
  on(AuthAction.login, (state, action) => {
    return {
      user: action.user
    }
  })
)

