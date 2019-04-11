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
import { ListarStakeholderComponent } from '../stakeholder/listar-stakeholder/listar-stakeholder.component';
import { CreateStakeholderComponent } from '../stakeholder/create-stakeholder/create-stakeholder.component';
import { ListarOrganizacionComponent } from '../organizacion/listar-organizacion/listar-organizacion.component';
import { CreateOrganizacionComponent } from '../organizacion/create-organizacion/create-organizacion.component';
import {AgregarStakeholderOrganizacionComponent} from '../organizacion/agregarStakeholder-organizacion/agregarStakeholder-organizacion.component';
import { CondicionListComponent } from '../condicion/condicion-list/condicion-list.component';
import { ListarObjetivoComponent } from '../objetivo/listar-objetivo/listar-objetivo.component'
import { CrearObjetivoComponent } from '../objetivo/crear-objetivo/crear-objetivo.component';


const routes: Routes = [

    {
        path: 'home',
        component: ListarInicioComponent
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
        path: 'aprobaciones',
        component: ListarAprobacionComponent        
    },
    {
        path: 'aprobaciones/new',
        component: CreateAprobacionComponent        
    },
    {
        path: 'casosdeuso',
        component: CasodeusoListComponent        
    },
/*     {
        path: 'casosdeuso/new',
        component: CasodeusoCreateComponent        
    }, */
    {
        path: 'condiciones',
        component: CondicionListComponent        
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
        path: 'objetivos',
        component: ListarObjetivoComponent        
    },
    {
        path: 'objetivos/new',
        component: CrearObjetivoComponent        
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