import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SwapComponent } from './swap/swap.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { PracticeComponent } from './practice/practice.component';
import { SwitchComponent } from './switch/switch.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FormsComponent } from './forms/forms.component';
import { MethodsComponent } from './methods/methods.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'dashboard',component:DashboardComponent},
 {path:'swap',component:SwapComponent},
 {path:'practice',component:PracticeComponent,canActivate:[UserGuard]},
 {path:'switch',component:SwitchComponent},
 {path:'rxjs',component:RxjsComponent},
 {path:'forms',component:FormsComponent},
 {path:'methods',component:MethodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
