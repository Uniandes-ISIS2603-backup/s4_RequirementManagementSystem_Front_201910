import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {ListarInicioComponent} from '../inicio/listar-inicio/listar-inicio.component';
import { ListarCambioComponent } from '../cambio/listar-cambio/listar-cambio.component';
import { CambioCreateComponent } from '../cambio/cambio-create/cambio-create.component';
import { ListarAprobacionComponent } from '../aprobacion/listar-aprobacion/listar-aprobacion.component';
import { CreateAprobacionComponent } from '../aprobacion/create-aprobacion/create-aprobacion.component';
import { CasodeusoListComponent } from '../casodeuso/casodeuso-list/casodeuso-list.component';
import { ListarStakeholderComponent } from '../stakeholder/listar-stakeholder/listar-stakeholder.component';
import { CreateStakeholderComponent } from '../stakeholder/create-stakeholder/create-stakeholder.component';
import { EliminarStakeholderComponent } from '../stakeholder/eliminar-stakeholder/eliminar-stakeholder.component';
import { UpdateStakeholderComponent } from '../stakeholder/update-stakeholder/update-stakeholder.component';
import { ListarOrganizacionComponent } from '../organizacion/listar-organizacion/listar-organizacion.component';
import { CreateOrganizacionComponent } from '../organizacion/create-organizacion/create-organizacion.component';
import { EliminarOrganizacionComponent } from '../organizacion/eliminar-organizacion/eliminar-organizacion.component';
import {CasodeusoDetailComponent} from '../casodeuso/casodeuso-detail/casodeuso-detail.component';
import { CondicionListComponent } from '../condicion/condicion-list/condicion-list.component';
import {CondicionDetailComponent} from '../condicion/condicion-detail/condicion-detail.component';


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
       path: 'cambio-list',
       component: ListarCambioComponent,
       outlet: "sidebar"
   },
   {
    path: 'cambio-add',
    component: CambioCreateComponent,
    outlet: "sidebar"
  },
  {
    path: 'aprobacion-list',
    component: ListarAprobacionComponent,
    outlet: "sidebar"
  },
  {
    path: 'aprobacion-add',
    component: CreateAprobacionComponent,
    outlet: "sidebar"
  },
  {
    path: 'casodeuso-list',
    component: CasodeusoListComponent,
    outlet: "sidebar"
  },
  {
    path: 'condicion-list',
    component: CondicionListComponent,
    outlet: "sidebar"  
  },
   {
       path: '**',
       component: ListarInicioComponent
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