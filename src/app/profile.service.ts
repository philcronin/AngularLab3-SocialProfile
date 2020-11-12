import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Phil Cronin',
    contact: '810-338-7233',
    bio: 'This is my bio.',
  };
  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };

  setUserProfile = (newUserProfile: UserProfile): void => {
    this.userProfile = newUserProfile;
  };
}
