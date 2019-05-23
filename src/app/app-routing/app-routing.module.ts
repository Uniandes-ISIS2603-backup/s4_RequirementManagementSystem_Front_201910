import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { ListarInicioComponent } from '../inicio/listar-inicio/listar-inicio.component';
import { ListarCambioComponent } from '../cambio/listar-cambio/listar-cambio.component';
import { CambioCreateComponent } from '../cambio/cambio-create/cambio-create.component';
import { ListarAprobacionComponent } from '../aprobacion/listar-aprobacion/listar-aprobacion.component';
import { CreateAprobacionComponent } from '../aprobacion/create-aprobacion/create-aprobacion.component';
import { CasodeusoListComponent } from '../casodeuso/casodeuso-list/casodeuso-list.component';
import { CasodeusoCreateComponent } from '../casodeuso/casodeuso-create/casodeuso-create.component';
import { ListarStakeholderComponent } from '../stakeholder/listar-stakeholder/listar-stakeholder.component';
import { CreateStakeholderComponent } from '../stakeholder/create-stakeholder/create-stakeholder.component';
import { ListarOrganizacionComponent } from '../organizacion/listar-organizacion/listar-organizacion.component';
import { CreateOrganizacionComponent } from '../organizacion/create-organizacion/create-organizacion.component';
import { CondicionListComponent } from '../condicion/condicion-list/condicion-list.component';
import { CondicionCreateComponent } from '../condicion/condicion-create/condicion-create.component';
import { ListarObjetivoComponent } from '../objetivo/listar-objetivo/listar-objetivo.component'
import { CrearObjetivoComponent } from '../objetivo/crear-objetivo/crear-objetivo.component';
import { ListarRequisitosComponent } from '../requisito/listar-requisitos/listar-requisitos.component';
import { CrearRequisitoComponent } from '../requisito/crear-requisito/crear-requisito.component';
import { RequisitoDetailComponent } from '../requisito/requisito-detail/requisito-detail.component';
import { ModificarRequisitoComponent } from '../requisito/modificar-requisito/modificar-requisito.component';
import { ListarObjetivoDetailComponent } from '../objetivo/listar-objetivo-detail/listar-objetivo-detail.component';
import { UpdateObjetivoComponent } from '../objetivo/update-objetivo/update-objetivo.component';
import { CaminoListComponent } from '../camino/camino-list/camino-list.component';
import { CaminoCreateComponent } from '../camino/camino-create/camino-create.component';
import { OrganizacionDetailComponent } from '../organizacion/organizacion-detail/organizacion-detail.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ListarProyectoComponent } from '../proyecto/listar-proyecto/listar-proyecto.component';
import { CreateProyectoComponent } from '../proyecto/create-proyecto/create-proyecto.component';
import { DetailProyectoComponent } from '../proyecto/detail-proyecto/detail-proyecto.component';

import { MostrarMenuComponent } from '../menu/mostrar-menu/mostrar-menu.component';
import { MostrarStartComponent } from '../start/mostrar-start/mostrar-start.component';
import { UpdateProyectoComponent } from '../proyecto/update-proyecto/update-proyecto.component';
import { CasodeusoDetail } from '../casodeuso/casodeuso-detail';
import { CasodeusoUpdateComponent } from '../casodeuso/casodeuso-update/casodeuso-update.component';
import { CondicionDetailComponent } from '../condicion/condicion-detail/condicion-detail.component';
import { CondicionUpdateComponent } from '../condicion/condicion-update/condicion-update.component';
import { CaminoDetailComponent } from '../camino/camino-detail/camino-detail.component';
import { CaminoUpdateComponent } from '../camino/camino-update/camino-update.component';
import { CasodeusoDetailComponent } from '../casodeuso/casodeuso-detail/casodeuso-detail.component';
import { CambioUpdateComponent } from '../cambio/cambio-update/cambio-update.component';
import { CambioDetailComponent } from '../cambio/cambio-detail/cambio-detail.component';
import { DetailAprobacionComponent } from '../aprobacion/detail-aprobacion/detail-aprobacion.component';
import { UpdateAprobacionComponent } from '../aprobacion/update-aprobacion/update-aprobacion.component';


const routes: Routes = [

    {
        path: 'home',
        component: MostrarStartComponent
    },
    {
        path: 'start',
        component: MostrarMenuComponent
    },
    {
        path: 'login',
        component: AuthLoginComponent
    },
    {
        path: 'signup',
        component: AuthSignUpComponent
    },

    {
        path: 'proyectos',
        component: ListarProyectoComponent
    },
    {
        path: 'proyectos/new',
        component: CreateProyectoComponent
    },
    {
        path: 'proyectos/nuevo',
        component: CreateProyectoComponent
    },
    {
        path: 'proyectos/:proyectoId',
        component: DetailProyectoComponent,

    },
    {
        path: 'proyectos/:proyectoId/update',
        component: UpdateProyectoComponent,

    },
    {
        path: 'proyectos/:proyectoId',
        children: [
            {
                path: 'objetivos',
                component: ListarObjetivoComponent
            },
            {
                path: 'objetivos/new',
                component: CrearObjetivoComponent
            },
            {
                path: 'objetivos/:objetivoId',
                component: ListarObjetivoDetailComponent
            },
            {
                path: 'objetivos/:objetivoId/update',
                component: UpdateObjetivoComponent
            },
            {
                path: 'objetivos/:objetivoId',
                children: [{
                    path: 'requisitos', component: ListarRequisitosComponent
                },
                {
                    path: 'requisitos/new', component: CrearRequisitoComponent
                },
                {
                    path: 'requisitos/:requisitoId', component: RequisitoDetailComponent, runGuardsAndResolvers: 'always'
                },
                {
                    path: 'requisitos/:requisitoId/update', component: ModificarRequisitoComponent
                },
                {
                    path: 'requisitos/:requisitoId',
                    children: [
                        {
                            path: 'casosDeUso',
                            component: CasodeusoListComponent
                        },
                        {
                            path: 'casosDeUso/new',
                            component: CasodeusoCreateComponent
                        },
                        {
                            path: 'casosDeUso/:casoDeUsoId',
                            component: CasodeusoDetailComponent
                        },
                        {
                            path: 'casosDeUso/:casoDeUsoId/update',
                            component: CasodeusoUpdateComponent
                        },
                        {
                            path: 'casosDeUso/:casoDeUsoId',
                            children: [
                                {
                                    path: 'condiciones',
                                    component: CondicionListComponent
                                },
                                {
                                    path: 'condiciones/new',
                                    component: CondicionCreateComponent
                                },
                                {
                                    path: 'condiciones/:condicionId',
                                    component: CondicionDetailComponent
                                },
                                {
                                    path: 'condiciones/:condicionId/update',
                                    component: CondicionUpdateComponent
                                },
                                {
                                    path: 'caminos',
                                    component: CaminoListComponent
                                },
                                {
                                    path: 'caminos/new',
                                    component: CaminoCreateComponent
                                },
                                {
                                    path: 'caminos/:caminoId',
                                    component: CaminoDetailComponent
                                },
                                {
                                    path: 'caminos/:caminoId/update',
                                    component: CaminoUpdateComponent
                                },
                            ]
                        }, {
                            path: 'cambios',
                            component: ListarCambioComponent
                        },
                        {
                            path: 'cambios/new',
                            component: CambioCreateComponent
                        },
                        {
                            path: 'cambios/:cambioId',
                            component: CambioDetailComponent
                        },
                        {
                            path: 'cambios/:cambioId/update',
                            component: CambioUpdateComponent
                        },
                        {
                            path: 'aprobaciones',
                            component: ListarAprobacionComponent
                        },
                        {
                            path: 'aprobaciones/new',
                            component: CreateAprobacionComponent
                        }, {
                            path: 'aprobaciones/:aprobacionId',
                            component: DetailAprobacionComponent
                        }, {
                            path: 'aprobaciones/:aprobacionId/update',
                            component: UpdateAprobacionComponent
                        }
                    ]
                },
                {
                    path: 'cambios',
                    component: ListarCambioComponent
                },
                {
                    path: 'cambios/new',
                    component: CambioCreateComponent
                },
                {
                    path: 'cambios/:cambioId',
                    component: CambioDetailComponent
                },
                {
                    path: 'cambios/:cambioId/update',
                    component: CambioUpdateComponent
                },
                {
                    path: 'aprobaciones',
                    component: ListarAprobacionComponent
                },
                {
                    path: 'aprobaciones/new',
                    component: CreateAprobacionComponent
                }, {
                    path: 'aprobaciones/:aprobacionId',
                    component: DetailAprobacionComponent
                }, {
                    path: 'aprobaciones/:aprobacionId/update',
                    component: UpdateAprobacionComponent
                }
                ]
            }
        ]
    },

    {
        path: 'stakeholders',
        component: ListarStakeholderComponent
    },
    {
        path: 'stakeholders/new',
        component: CreateStakeholderComponent
    },
    {
        path: 'organizaciones',
        component: ListarOrganizacionComponent
    },
    {
        path: 'organizaciones/new',
        component: CreateOrganizacionComponent
    },
    {
        path: 'organizaciones/organizacion/:id', component: OrganizacionDetailComponent, runGuardsAndResolvers: 'always'
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}