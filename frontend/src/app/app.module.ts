import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAbsenceComponent } from './components/add-absence/add-absence.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AbsencesListComponent } from './components/absences-list/absences-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddAbsenceComponent,
    AddUserComponent,
    AbsencesListComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
