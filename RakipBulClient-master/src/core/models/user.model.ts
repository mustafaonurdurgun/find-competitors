import { Advert } from './advert.model';
import { Comment } from './comment.model';
import { Entity } from './entity.model';
import { Events } from './events.model';
import { Offer } from './offer.model';
import { Point } from './point.model';
import { UserEvents } from './userevents.model';

export class User extends Entity<number> {
  email: string = '';
  userName: string = '';
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  userImage: string = '';
  phoneNumber: string = '';
  password: string = '';
  gender?: Gender;
  userType?: UserType;
  points?: Point[];
  comments?: Comment[];
  adverts?: Advert[];
  offers?: Offer[];
  participatedEvents?: UserEvents[];
  }

export enum UserType {
  Admin,
  User,
}

export enum Gender {
  Male,
  Female,
}
