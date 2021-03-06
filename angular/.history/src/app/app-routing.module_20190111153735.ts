import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component:LoginComponent,canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
 class AppRoutingModule { }
