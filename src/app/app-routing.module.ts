import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { PersonComponent } from "./person/person.component";

const routes: Routes = [
  { path: "persondetails", component: PersonDetailsComponent },
  { path: "person", component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
