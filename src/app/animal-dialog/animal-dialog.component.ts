import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Animal, animalType, colorType, genders } from '../animal/animal';

@Component({
  selector: 'app-animal-dialog',
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.css'],
})
export class AnimalDialogComponent {
  species = [
    animalType.BIRD,
    animalType.BUNNY,
    animalType.CAT,
    animalType.DEER,
    animalType.DOG,
    animalType.GOAT,
    animalType.TURTLE,
  ];
  genders = [
    genders.MALE,
    genders.FEMALE
  ];
  colors = [
    colorType.BEIGE,
    colorType.GRIJS,
    colorType.GRIJSWIT,
    colorType.WITGRIJS,
    colorType.LAPSCHILD,
    colorType.ROS,
    colorType.ROSWIT,
    colorType.WITROS,
    colorType.TIJGER,
    colorType.TIGJERWIT,
    colorType.WITTIJGER,
    colorType.WIT,
    colorType.ZWART,
    colorType.ZWARTWIT,
    colorType.WITZWART,
  ];
  selectedSpecies = animalType.CAT;
  selectedGender = genders.MALE;
  selectedColor = colorType.BEIGE;

  color = colorType;
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<AnimalDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AnimalDialogData
  ) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  cancel(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}

export interface AnimalDialogData {
  animal: Partial<Animal>;
  enableDelete: boolean;
}

export interface AnimalDialogResult {
  animal: Animal;
  delete?: boolean;
}
