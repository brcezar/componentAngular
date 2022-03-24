import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    AlertComponent,
    BadgeComponent,
    CountdownComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
