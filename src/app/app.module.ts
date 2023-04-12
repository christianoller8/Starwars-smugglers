import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { WelcomePageComponent } from "./features/pages/welcome-page/welcome-page.component";
import { CharactersComponent } from "./features/pages/characters/characters.component";
import { ShipsComponent } from "./features/pages/ships/ships.component";
import { PlanetsComponent } from "./features/pages/planets/planets.component";

import { NavigationService } from "./core/services/navigation.service";
import { DataCharactersService } from "./core/services/data-characters.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CharactersComponent,
    ShipsComponent,
    PlanetsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NavigationService, DataCharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
