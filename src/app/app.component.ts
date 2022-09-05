import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "tienda";
  hidden: boolean;

  constructor() {
    this.hidden = false;
  }

  getTienda(): string {
    this.hidden = true;
    return "/productos";
  }
}
