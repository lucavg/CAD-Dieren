import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AnimalComponent } from './animal/animal.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AnimalDialogComponent } from './animal-dialog/animal-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule, provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { MatFileUploadModule } from 'angular-material-fileupload';


const importModules = [
  BrowserModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  FlexLayoutModule,
  MatRadioModule,
  MatSlideToggleModule,
  FormsModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebase),
  FirestoreModule,
];
const exportModules = [
  BrowserModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
  FlexLayoutModule,
  MatRadioModule,
  FormsModule,
  BrowserAnimationsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalDialogComponent,
    AnimalComponent,
  ],
  imports: importModules,
  exports: exportModules,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
