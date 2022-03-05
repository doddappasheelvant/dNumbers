import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpeakTheTextComponent} from '../app/speak-the-text/speak-the-text.component';
import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
  {path:'speak-the-text', component: SpeakTheTextComponent},
  {path:'numbers', component: NumbersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

