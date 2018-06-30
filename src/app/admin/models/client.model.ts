import { Car } from "./car.model";

export enum ClientType {
  Company = "COMPANY",
  Regular = "HOMEUSER"
}

export interface Client {
  id?: number;
  firstName?: string;
  firstNameIsVisible?: boolean;
  lastName?: string;
  lastNameIsVisible?: boolean;
  dni?: string;
  dniIsVisible?: boolean;
  gender?: string;
  genderIsVisible?: boolean;
  birthday?: string;
  birthdayIsVisible?: boolean;
  registrationDate?: string;
  registrationDateIsVisible?: boolean;
  address?: string;
  addressIsVisible?: boolean;
  locality?: string;
  localityIsVisible?: boolean;
  zipCode?: string;
  zipCodeIsVisible?: boolean;
  observations?: null;
  observationsIsVisible?: boolean;
  email?: string;
  emailIsVisible?: boolean;
  homePhone?: string;
  homePhoneIsVisible?: boolean;
  mobilePhone?: string;
  mobilePhoneIsVisible?: boolean;
  otherPhone?: string;
  otherPhoneIsVisible?: boolean;
  linkedTo?: string;
  linkedToIsVisible?: boolean;
  type?: ClientType;
  companyName?: string;
  companyNameIsVisible?: boolean;
  position?: string;
  positionIsVisible?: boolean;
  web?: string;
  webIsVisible?: boolean;
  socialMission?: string;
  socialMissionIsVisible?: boolean;
  car_id?: number;
  car?: Car;
  created_at?: string;
  updated_at?: string;
}
