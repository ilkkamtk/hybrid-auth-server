import {MediaItem, UserWithNoPassword} from './DBTypes';

type MessageResponse = {
  message: string;
};

type ErrorResponse = MessageResponse & {
  stack?: string;
};

type LoginResponse = MessageResponse & {
  token: string;
  message: string;
  user: UserWithNoPassword;
};

type UserResponse = MessageResponse & {
  user: UserWithNoPassword;
};

type UserDeleteResponse = MessageResponse & {
  user: {user_id: number};
};

type MediaResponse = MessageResponse & {
  media: MediaItem | MediaItem[];
};

export type {
  MessageResponse,
  ErrorResponse,
  LoginResponse,
  UserResponse,
  UserDeleteResponse,
  MediaResponse,
};
