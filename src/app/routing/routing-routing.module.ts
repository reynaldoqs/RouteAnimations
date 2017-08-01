import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from '../components/first/first.component';
import { SecondComponent } from '../components/second/second.component';
import { ThirdComponent } from '../components/third/third.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/first', pathMatch: 'full'
  },
  {
    path: 'first', component: FirstComponent, data: {state: 'first'}
  },
  {
    path: 'second', component: SecondComponent, data: {state: 'second'}
  },
  {
    path: 'third', component: ThirdComponent, data: {state: 'third'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
export const RoutingComponents = [FirstComponent, SecondComponent, ThirdComponent];
