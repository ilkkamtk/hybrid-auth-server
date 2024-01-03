import {LoginUser} from '../types/DBTypes';

export default interface LoginMessageResponse {
  token: string;
  message: string;
  user: Omit<LoginUser, 'password'>;
}
