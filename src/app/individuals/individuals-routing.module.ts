import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndividualsPageComponent } from "./individuals-page/individuals-page.component";

const routes: Routes = [
  {
    path: "",
    component: IndividualsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualsRoutingModule {}
