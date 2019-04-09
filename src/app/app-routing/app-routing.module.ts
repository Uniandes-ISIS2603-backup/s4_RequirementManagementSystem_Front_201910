import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ListarInicioComponent} from '../inicio/listar-inicio/listar-inicio.component';
import { ListarCambioComponent } from '../cambio/listar-cambio/listar-cambio.component';
import { ListarStakeholderComponent } from '../stakeholder/listar-stakeholder/listar-stakeholder.component';
import { CreateStakeholderComponent } from '../stakeholder/create-stakeholder/create-stakeholder.component';
import { EliminarStakeholderComponent } from '../stakeholder/eliminar-stakeholder/eliminar-stakeholder.component';
import { UpdateStakeholderComponent } from '../stakeholder/update-stakeholder/update-stakeholder.component';
import { ListarOrganizacionComponent } from '../organizacion/listar-organizacion/listar-organizacion.component';
import { CreateOrganizacionComponent } from '../organizacion/create-organizacion/create-organizacion.component';
import { EliminarOrganizacionComponent } from '../organizacion/eliminar-organizacion/eliminar-organizacion.component';

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
        path: 'stakeholder',
        children: [
            {
                path: 'listar',
                component: ListarStakeholderComponent,
                outlet: "inicio"
            },
            {
                path: 'crear',
                component: CreateStakeholderComponent,
                outlet: "inicio"
            },
            {
                path: 'eliminar',
                component: EliminarStakeholderComponent,
                outlet: "inicio"
            },
            {
                path: 'update',
                component: UpdateStakeholderComponent,
                outlet: "inicio"
            }
        ]
    },
    {
        path: 'organizacion',
        children: [
            {
                path: 'listar',
                component: ListarOrganizacionComponent,
                outlet: "inicio"
            },
            {
                path: 'crear',
                component: CreateOrganizacionComponent,
                outlet: "inicio"
            },
            {
                path: 'eliminar',
                component: EliminarOrganizacionComponent,
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
