import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent , pathMatch: 'full'},
  { path : 'home', component : HomeComponent },
  { path : 'user/login' , component : LoginComponent },
  { path : 'user/profile' ,  component : ProfileComponent },
  { path : 'admin/list-products', component : ListProductsComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },  
  { path : '***', component : DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
