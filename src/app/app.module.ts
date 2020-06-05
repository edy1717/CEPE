import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
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


import { ListProductsComponent } from './components/list-products/list-products.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ListProfilesComponent } from './components/profile/list-profiles/list-profiles.component';
import { FilterProfilePipe } from './shared/pipes/filter-profile.pipe';
import { MyproductsComponent } from './components/profile/myproducts/myproducts.component';
// import { ModalComponent } from './components/modals/modal/modal.component';
import { OffersComponent } from './components/offers/offers.component';
import { ModalMyProductsComponent } from './components/modals/modal-my-products/modal-my-products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginatePipe } from './shared/pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './@theme/theme.module';
import { ModalReporteComponent } from './components/modals/modal-reporte/modal-reporte.component';
import { ReportsComponent } from './components/profile/reports/reports.component';
// import { AuthInterceptorService } from  './services/auth-interceptor.service';
import { AuthService } from './services/auth.service';

import { ModalUserprofileComponent } from './components/modals/modal-userprofile/modal-userprofile.component';
import { ModalOffersComponent } from './components/modals/modal-offers/modal-offers.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { ModalProfileComponent } from './components/modals/modal-profile/modal-profile.component'
import { ModalHomeComponent } from './components/modals/modal-home/modal-home.component';
import { safeUrlPipe } from './shared/pipes/safe-url.pipe';
import { FctrlxAngularFileReader } from 'fctrlx-angular-file-reader';
import { FilterReportsPipe } from './shared/pipes/filter-report.pipe';
import { ModalAvisoComponent } from './components/modals/modal-aviso/modal-aviso.component';

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
    ModalUserprofileComponent,
    ReportsComponent,
    safeUrlPipe,
    FilterReportsPipe,
    ModalAvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ThemeModule,
    FctrlxAngularFileReader
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent,
      ],
      entryComponents:[
        ModalHomeComponent,
        ModalComponent,
        ModalReporteComponent,
        
      ]

})
export class AppModule { }
