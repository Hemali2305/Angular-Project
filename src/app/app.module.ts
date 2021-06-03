import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    ngFormsModule,
    ReactiveFormsModule,
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  //   NO_ERRORS_SCHEMA
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
