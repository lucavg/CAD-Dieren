import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal, genders } from './animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  genders = [
    genders.MALE,
    genders.FEMALE
  ];
  @Input() animal: Animal | null = null;
  @Output() edit = new EventEmitter<Animal>();
}
