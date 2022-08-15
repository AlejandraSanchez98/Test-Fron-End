import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./components/main/elements/list/list.component";
import { DetailsComponent } from "./components/main/elements/details/details.component";

const routes: Routes = [
  {path:"list", component: ListComponent},
  {path:"details", component: DetailsComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}, //en caso de que no ponga ninguna ruta
  {path: '**', redirectTo: 'list', pathMatch: 'full'} //en caso de que el usuario ponga una 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
