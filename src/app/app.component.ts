import { Component, ViewChild } from '@angular/core';
import { Animal, animalType, colorType, genders } from './animal/animal';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Firestore } from '@angular/fire/firestore'
import {
  AnimalDialogComponent,
  AnimalDialogResult,
} from './animal-dialog/animal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animals: Animal[] = [
    {
      id: 0,
      name: 'Luk',
      species: animalType.CAT,
      neutered: true,
      chipped: true,
      gender: genders.MALE,
      city: 'Antwerpen',
      street: 'Cuperusstraat',
      color: colorType.BEIGE,
      imageUrl:
        'https://www.cad-dieren.be/verloren%20kat%202022/v%20b%20lukske%20cuperus.jpg',
      dateLost: new Date('09-21-2022'),
      response: '',
    },
    {
      id: 1,
      name: 'Luk',
      species: animalType.CAT,
      neutered: true,
      chipped: true,
      gender: genders.MALE,
      city: 'Antwerpen',
      street: 'Cuperusstraat',
      color: colorType.BEIGE,
      imageUrl:
        'https://www.cad-dieren.be/verloren%20kat%202022/v%20b%20lukske%20cuperus.jpg',
      dateLost: new Date('09-21-2022'),
      response: `Mail 28/09/2022: "Beste Sophie,
      Dit is een hoera bericht gisteren avond kreeg ik een belletje van een buur 11 huizen voorbij het onze die in een kleine bergruimte op de binnenplaats van het garagecomplex aldaar mijn poes had opgemerkt. In zeven haasten daarnaartoe en inderdaad daar zat een slechtgehumeurd en hongerig Lukske.
      Flyers blijven bussen levert duidelijk resultaten op. Dit is de tweede keer dat we hem dank zij uw flyers hebben mogen terugvinden. De toekomst moet uitwijzen of hij zijn les heeft geleerd. In elk geval en tot grote spijt waarschijnlijk van mijn roekeloze avonturier ligt er een beter afgesloten tuin in zijn toekomst, gebaseerd op voorbeelden van jullie website.
      Met vriendelijke groeten, Bea`,
    },
    {
      id: 2,
      name: 'Luk',
      species: animalType.CAT,
      neutered: false,
      chipped: true,
      gender: genders.FEMALE,
      city: 'Antwerpen',
      street: 'Cuperusstraat',
      color: colorType.BEIGE,
      imageUrl:
        'https://www.cad-dieren.be/verloren%20kat%202022/v%20b%20lukske%20cuperus.jpg',
      dateLost: new Date('09-21-2022'),
      response: '',
    },
  ];
  displayedColumns: string[] = [
    'Name',
    'Neutered',
    'Chipped',
    'Gender',
    'city',
    'street',
    'color',
    'imageUrl',
    'dateLost',
    'response',
  ];

  constructor(private dialog: MatDialog, private store: Firestore) {}

  newAnimal(): void {
    const dialogRef = this.dialog.open(AnimalDialogComponent, {
      width: '270px',
      data: {
        animal: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: AnimalDialogResult | undefined) => {
        if (!result) {
          return;
        }
        this.animals.push(result.animal);
      });
    console.log(this.animals);
  }
  editAnimal(list: 'done' | 'todo' | 'inProgress', animal: Animal): void {
    const dialogRef = this.dialog.open(AnimalDialogComponent, {
      width: '270px',
      data: {
        animal,
        enableDelete: true,
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: AnimalDialogResult | undefined) => {
        if (!result) {
          return;
        }
        // const dataList = this[list];
        // const animalIndex = dataList.indexOf(animal);
        // if (result.delete) {
        //   dataList.splice(animalIndex, 1);
        // } else {
        //   dataList[animalIndex] = animal;
        // }
      });
  }
}
