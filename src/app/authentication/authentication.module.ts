import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdTabsModule, MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';
import { SpinnerModule } from 'angular2-spinner';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdTabsModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    SpinnerModule,
    AuthenticationRoutingModule
  ],
})
export class AuthenticationModule { }
