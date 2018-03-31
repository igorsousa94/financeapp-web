import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full',
      },
      {
        path: '',
        component: FullLayoutComponent,
        data: {
          title: 'Home'
        },
        children: [
          {
            path: 'principal',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
          },
          {
            path: 'usuario',
            loadChildren: './usuario/usuario.module#UsuarioModule',
            data: {
              title: 'Usuários'
            }
          }
        ]
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}