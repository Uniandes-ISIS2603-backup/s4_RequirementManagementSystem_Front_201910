import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ListarInicioComponent} from '../inicio/listar-inicio/listar-inicio.component';
import { ListarCambioComponent } from '../cambio/listar-cambio/listar-cambio.component';
import { CasodeusoListComponent } from '../casodeuso/casodeuso-list/casodeuso-list.component';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: ListarInicioComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },
    {
        path: 'cambio',
        children: [
            {
                path: 'list',
                component: ListarCambioComponent,
                outlet: "inicio"
            }
        ]
    },
    {
        path: 'casosdeuso',
        children: [{
          path: 'list',
          component: CasodeusoListComponent,
          outlet: "inicio"
        }
        ]
      }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
