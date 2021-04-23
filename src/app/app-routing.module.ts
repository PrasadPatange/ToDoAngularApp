import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponentComponent } from './MyComponents/about-component/about-component.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
// add routing 
const routes: Routes = [
  { path: '', component:TodosComponent},
  { path: 'about', component: AboutComponentComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
