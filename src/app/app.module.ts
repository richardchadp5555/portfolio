import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { BodyComponent } from './components/body/body.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AvatarComponent,
    ContactInformationComponent,
    BodyComponent,
    WebProjectsComponent,
    AboutMeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
