import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/profile/profile/profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ListProfilesComponent } from './components/profile/list-profiles/list-profiles.component';
import { FilterProfilePipe } from './shared/pipes/filter-profile.pipe';
import { MyproductsComponent } from './components/profile/myproducts/myproducts.component';
import { ModalProfileComponent } from './components/modals/modal-profile/modal-profile.component'
import { ModalComponent } from './components/modals/modal/modal.component';
import { OffersComponent } from './components/offers/offers.component';
import { ModalMyProductsComponent } from './components/modals/modal-my-products/modal-my-products.component';
import { ModalOffersComponent } from './components/modals/modal-offers/modal-offers.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalHomeComponent } from './components/modals/modal-home/modal-home.component';
import { PaginatePipe } from './shared/pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './@theme/theme.module';
import { ModalReporteComponent } from './components/modals/modal-reporte/modal-reporte.component';
import { ReportesComponent } from './components/profile/reportes/reportes.component';



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
    FilterPipe,
    ListProfilesComponent,
    FilterProfilePipe,
    MyproductsComponent,
    ModalProfileComponent,
    OffersComponent,
    ModalMyProductsComponent,
    ModalOffersComponent,
    ModalHomeComponent,
    PaginatePipe,
    ModalReporteComponent,
    ReportesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebaseconfig) ,
    // AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ThemeModule,

  ],
  providers: [
    // AngularFireAuth,
    // AngularFirestore,
  ],
  bootstrap: [AppComponent,
      ],
      entryComponents:[
        ModalHomeComponent,
      ]
})
export class AppModule { }
