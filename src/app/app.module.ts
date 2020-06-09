import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './@theme/theme.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListProfilesComponent } from './components/profile/list-profiles/list-profiles.component';
import { MyproductsComponent } from './components/profile/myproducts/myproducts.component';
import { OffersComponent } from './components/offers/offers.component';
import { ReportsComponent } from './components/profile/reports/reports.component';
import { AvisoPrivacidadComponent } from './components/aviso-privacidad/aviso-privacidad.component';

import { FctrlxAngularFileReader } from 'fctrlx-angular-file-reader';
import { AgmCoreModule } from '@agm/core';

//PIPE
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FilterProfilePipe } from './shared/pipes/filter-profile.pipe';
import { PaginatePipe } from './shared/pipes/paginate.pipe';
import { safeUrlPipe } from './shared/pipes/safe-url.pipe';
import { FilterReportsPipe } from './shared/pipes/filter-report.pipe';

//modals

import { ModalReporteComponent } from './components/modals/modal-reporte/modal-reporte.component';
import { ModalMyProductsComponent } from './components/modals/modal-my-products/modal-my-products.component';
import { ModalMapsComponent } from './components/modals/modal-maps/modal-maps.component';
import { ModalUserprofileComponent } from './components/modals/modal-userprofile/modal-userprofile.component';
import { ModalOffersComponent } from './components/modals/modal-offers/modal-offers.component';
import { ModalComponent } from './components/modals/modal/modal.component';
import { ModalProfileComponent } from './components/modals/modal-profile/modal-profile.component'
import { ModalHomeComponent } from './components/modals/modal-home/modal-home.component';



@NgModule({
  entryComponents:[
    ModalHomeComponent,
    ModalComponent,
    ModalReporteComponent,
  ],
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
    AvisoPrivacidadComponent,
    ModalMapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ThemeModule,
    FctrlxAngularFileReader,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAwSIeXKK3WlzKFzKWrnaGBTZu6R46huDU'})
  ],
  providers: [
  ],
  bootstrap: [AppComponent,
      ]

})
export class AppModule { }
