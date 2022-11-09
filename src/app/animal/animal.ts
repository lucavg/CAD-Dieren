export interface Animal {
  id?: number;
  name: string;
  species: animalType;
  neutered: boolean;
  chipped: boolean;
  chipNr: number;
  gender: genders;
  city: string;
  street: string;
  color: colorType;
  imageUrl: string;
  dateLost: Date;
  response: string;
}

export enum colorType {
  BEIGE = 'Beige en bruin (met wit)',
  GRIJS = 'Volledig grijs',
  GRIJSWIT = 'Grijs met wit',
  WITGRIJS = 'Wit met grijs',
  LAPSCHILD = 'Lapjes en schildpad (met wit)',
  ROS = 'Volledig ros',
  ROSWIT = 'Ros met wit',
  WITROS = 'Wit met ros',
  TIJGER = 'Volledig tijger',
  TIGJERWIT = 'Tijger met wit',
  WITTIJGER = 'Wit met tijger',
  WIT = 'Volledig wit',
  ZWART = 'Volledig zwart',
  ZWARTWIT = 'Zwart met wit',
  WITZWART = 'Wit met zwart'
}

export enum animalType {
  CAT = 'Cat',
  DOG = 'Dog',
  BUNNY = 'Bunny',
  TURTLE = 'Turtle',
  BIRD = 'Bird',
  DEER = 'Deer',
  GOAT = 'Goat',
  FERRET = 'Ferret'
}

export enum genders {
  MALE = 'Male',
  FEMALE = 'Female'
}
