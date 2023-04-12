import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomePageComponent } from "./features/pages/welcome-page/welcome-page.component";
import { CharactersComponent } from "./features/pages/characters/characters.component";
import { ShipsComponent } from "./features/pages/ships/ships.component";
import { PlanetsComponent } from "./features/pages/planets/planets.component";
import { CharacteristicsComponent } from "./features/pages/characteristics/characteristics.component";
import { PagenotfoundComponent } from "./features/pages/pagenotfound/pagenotfound.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "Home",
    },
    children: [
      {
        path: "",
        data: {
          breadcrumb: null,
        },
        component: WelcomePageComponent,
      },
      {
        path: "characters",
        data: {
          breadcrumb: "Contrabandistas",
        },
        children: [
          {
            path: "",
            data: {
              breadcrumb: null,
            },
            component: CharactersComponent,
          },
          {
            path: ":id/characteristics",
            data: {
              breadcrumb: "Características",
            },
            children: [
              {
                path: "",
                data: {
                  breadcrumb: null,
                },
                component: CharacteristicsComponent,
              },
              {
                path: ":id/planets",
                data: {
                  breadcrumb: "Planeta",
                },
                children: [
                  {
                    path: "",
                    data: {
                      breadcrumb: null,
                    },
                    component: PlanetsComponent,
                  },
                  {
                    path: ":id/ships",
                    data: {
                      breadcrumb: "Nave",
                    },
                    component: ShipsComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "**",
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
