import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListProfilesComponent } from './components/profile/list-profiles/list-profiles.component';
import { AuthGuard } from './guards/auth.guard';
import { OffersComponent } from './components/offers/offers.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { MyproductsComponent } from './components/profile/myproducts/myproducts.component';
import { ReportsComponent } from './components/profile/reports/reports.component';
import { AvisoPrivacidadComponent } from './components/aviso-privacidad/aviso-privacidad.component';
import { ModalMapsComponent } from './components/modals/modal-maps/modal-maps.component';


const routes: Routes = [
  { path : 'home', component : HomeComponent , pathMatch: 'full'},
  { path : 'maps', component : ModalMapsComponent},
  { path : 'aviso-de-privavidad', component : AvisoPrivacidadComponent },
  { path : 'user/login' , component : LoginComponent },
  { path : 'user/profile' ,  component : ProfileComponent ,canActivate: [AuthGuard]  },
  { path : 'admin/list-products', component : ListProductsComponent, canActivate: [AuthGuard] },
  { path : 'admin/list-profiles', component :ListProfilesComponent, canActivate: [AuthGuard] },
  { path : 'admin/offers', component : OffersComponent, canActivate: [AuthGuard] },
  { path : 'admin/reports', component : ReportsComponent, canActivate: [AuthGuard]},
  { path : 'admin/user-products/:usuarioCreador', component : MyproductsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : '***',  component : HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
