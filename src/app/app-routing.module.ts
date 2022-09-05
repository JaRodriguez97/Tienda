import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [];

routes.push(
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  { path: "productos", component: ProductosComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent }
);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
