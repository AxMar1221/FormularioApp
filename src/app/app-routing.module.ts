import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'reactivo', component: ReactiveComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
