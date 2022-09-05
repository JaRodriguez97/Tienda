import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";

const routes: Routes = [];

routes.push(
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  // { path: "portafolio", redirectTo: "index", pathMatch: "full" },
  { path: "inicio", component: InicioComponent }
  // { path: "servicios", component: ServiciosComponent },
  // { path: "testimonios", component: TestimoniosComponent },
  // { path: "contactanos", component: ContactanosComponent }
);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
