import { Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";

import { environment } from "src/environments/environment";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, MatToolbar, MatButtonModule, MatIcon],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected readonly title = signal(environment.apiUrl);
	name = "Omnath Shinde";
}
