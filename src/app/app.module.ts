import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { InboxComponent } from './inbox/inbox.component';
import { HeaderComponent } from './shared/header/header.component';
import { MailComponent } from './inbox/mail/mail.component';
import { MailListComponent } from './inbox/mail-list/mail-list.component';
import { FormsModule } from '@angular/forms';

import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    InboxComponent,
    HeaderComponent,
    MailComponent,
    MailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
