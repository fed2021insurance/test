import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { Item1Component } from './aboutme/items/item1/item1.component';
import { Item2Component } from './aboutme/items/item2/item2.component';
import { Item3Component } from './aboutme/items/item3/item3.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutme', component: AboutmeComponent, children: [
    {path: 'items/item1', component: Item1Component},
    {path: 'items/item2', component: Item2Component},
    {path: 'items/item3', component: Item3Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
