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
       path: '**',
       component: ListarInicioComponent
   },
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
