import { UserProfileImage } from "./user-profile-image";

export interface ProfileInfoInterface {
  currentPictureAddress: string;
  profileCompletionPercentage: number;
  userImage: UserProfileImage[];
  email: string;
  phoneNumber: string;
  lName: string;
  fName: string;
  userAbout: string;
  linkdinProfile: string;
  telegramLink: string;
  receiveMessageEvent: boolean;
  homeAdderess: string;
  nationalCode: string;
  gender: boolean;
  birthDay: string;
  latitude: number | null;
  longitude: number | null;
}
