import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/profile/myproducts/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListProfilesComponent } from './components/profile/myproducts/list-profiles/list-profiles.component';
import { AuthGuard } from './guards/auth.guard';
import { OffersComponent } from './components/offers/offers.component';


const routes: Routes = [
  { path : 'home', component : HomeComponent , pathMatch: 'full'},
  { path : 'user/login' , component : LoginComponent },
  { path : 'user/profile' ,  component : ProfileComponent , canActivate: [AuthGuard] },
  { path : 'admin/list-products', component : ListProductsComponent,  canActivate: [AuthGuard]  },
  { path : 'admin/list-profiles', component :ListProfilesComponent,  canActivate: [AuthGuard]  },
  { path : 'admin/offers', component : OffersComponent, canActivate: [AuthGuard] },
  { path : 'admin/user-products/:idProfile', component : MyproductsComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : '***',  component : HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
