import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { InicioModule } from './inicio/inicio.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {RequisitoModule} from './requisito/requisito.module';

import { CambioModule } from './cambio/cambio.module';
import { AprobacionModule } from './aprobacion/aprobacion.module';

import { CasodeusoModule } from './casodeuso/casodeuso.module';
import {StakeholderModule} from './stakeholder/stakeholder.module';
import {OrganizacionModule} from './organizacion/organizacion.module';
import {CondicionModule} from './condicion/condicion.module';
import {CaminoModule} from './camino/camino.module';
import {ProyectoModule} from './proyecto/proyecto.module';


import { ObjetivoModule } from './objetivo/objetivo.module';
import { MenuModule } from './menu/menu.module';
import { StartModule } from './start/start.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        MenuModule,
        StartModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        InicioModule,
        CaminoModule,
        CambioModule,
        AprobacionModule,
        CasodeusoModule,
        CondicionModule,
        StakeholderModule,
        OrganizacionModule,
        ObjetivoModule,
        RequisitoModule,
        ProyectoModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule { }
