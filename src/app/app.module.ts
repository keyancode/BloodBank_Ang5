import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowDonarComponent } from './show-donar/show-donar.component';
import { ShowHospitalComponent } from './show-hospital/show-hospital.component';
import { AppListItemsComponent } from './app-list-items/app-list-items.component';
import { CampsComponent } from './camps/camps.component';
import { PastcampsComponent } from './pastcamps/pastcamps.component';
import { FuturecampsComponent } from './futurecamps/futurecamps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowDonarComponent,
    ShowHospitalComponent,
    AppListItemsComponent,
    CampsComponent,
    PastcampsComponent,
    FuturecampsComponent
  ],
  imports: [
    BrowserModule , HttpClientModule,FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
