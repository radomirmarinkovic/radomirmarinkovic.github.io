import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// PRIMENG //
import {AccordionModule} from 'primeng/primeng';
import {MenubarModule,MenuItem} from 'primeng/primeng';

// ROUTER //
import { routers } from './app.router';

// COMPONENTS //
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent} from './city/city.detail.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { HomeComponent } from './home-component/home.component';
import { SamplesComponent } from './samples-component/samples.component';
import { RandomComponent } from './random-component/random.component';


// SERVICES //
import {CityService} from './city/city.service';
import {RandomService} from './random-component/random.service';


@NgModule({
  declarations: [
    AppComponent,
    //ADD COMPONENTS HERE //
    CityComponent,
    CityDetailComponent,
    NavbarComponent,
    HomeComponent,
    SamplesComponent,
    RandomComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //ADD IMPORTS HERE //
    routers,

    //ADD PRIMENG HERE //
    AccordionModule,
    MenubarModule
  ],
  providers: [
    // ADD SERVICES HERE //
    CityService,
    RandomService


    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
