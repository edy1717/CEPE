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
import { ReportesComponent } from './components/profile/reportes/reportes.component';


const routes: Routes = [
  { path : 'home', component : HomeComponent , pathMatch: 'full'},
  { path : 'user/login' , component : LoginComponent },
  { path : 'user/profile' ,  component : ProfileComponent ,  },
  { path : 'admin/list-products', component : ListProductsComponent,    },
  { path : 'admin/list-profiles', component :ListProfilesComponent,    },
  { path : 'admin/offers', component : OffersComponent,  },
  { path : 'admin/user-products/:idProfile', component : MyproductsComponent,  },
  { path : 'admin/reporte', component : ReportesComponent,  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : '***',  component : HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
