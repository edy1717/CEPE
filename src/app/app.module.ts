import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent }  from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilterPipe } from './pipes/filter.pipe'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent, 
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ListProductsComponent,
    ModalComponent,
    DashboardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseconfig) ,
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore
  ],
  bootstrap: [AppComponent,
      ]
})
export class AppModule { }
