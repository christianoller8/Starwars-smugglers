import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BreadcrumbModule } from "primeng/breadcrumb";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { WelcomePageComponent } from "./features/pages/welcome-page/welcome-page.component";
import { CharactersComponent } from "./features/pages/characters/characters.component";
import { CharacteristicsComponent } from "./features/pages/characteristics/characteristics.component";
import { PlanetsComponent } from "./features/pages/planets/planets.component";
import { ShipsComponent } from "./features/pages/ships/ships.component";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { NavigationService } from "./core/services/navigation.service";
import { DataCharactersService } from "./core/services/data-characters.service";

import { HeaderComponent } from "./core/components/header/header.component";

import { BreadcrumbComponent } from "./core/components/breadcrumb/breadcrumb.component";
import { ChristFooterModule } from "christ-footer";
import { PagenotfoundComponent } from "./features/pages/pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CharactersComponent,
    CharacteristicsComponent,
    PlanetsComponent,
    ShipsComponent,
    HeaderComponent,
    BreadcrumbComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    ChristFooterModule,
    AppRoutingModule,
    BreadcrumbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [NavigationService, DataCharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./../assets/i18n/", ".json");
}
