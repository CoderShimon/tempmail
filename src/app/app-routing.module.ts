import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { MailComponent } from './inbox/mail/mail.component';
import { MailListComponent } from './inbox/mail-list/mail-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inbox-component', 
    component: InboxComponent,
    children: [
      {path: '', component: MailListComponent},
      {path: 'mail-component', component: MailComponent},
    ],
 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
