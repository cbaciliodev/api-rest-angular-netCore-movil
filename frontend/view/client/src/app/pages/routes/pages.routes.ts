/**
 * Modulos
 */
import { Routes, RouterModule } from "@angular/router";
/**
 * Componentes
 */
import { PagesComponent } from "../pages.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { PerfilComponent } from "../perfil/perfil.component";

const pages_routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: {
          titulo: "Inicio",
          routes: [
            { titulo: "Inicio" },
            { titulo: "Cuadro General" }
          ]
        }
      },
      {
        path: "perfil",
        component: PerfilComponent,
        data: {
          titulo: "Perfil de Usuario",
          routes: [
            { titulo: "Perfil" },
            { titulo: "Datos del Usuario" }
          ]
        }
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pages_routes);
