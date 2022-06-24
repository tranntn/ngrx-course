import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';

//function - not action
export const login = createAction(
  "[Login Page] User Login",
  props<{user: User}>()
)

export const logout = createAction(
  "[Top Menu] Logout"
)



