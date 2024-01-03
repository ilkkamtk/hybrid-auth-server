import {LoginUser} from '../types/DBTypes';

export default interface DBMessageResponse {
  message: string;
  user: {user_id: number} | LoginUser;
}
