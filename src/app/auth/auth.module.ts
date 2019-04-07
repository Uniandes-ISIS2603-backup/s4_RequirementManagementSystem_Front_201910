import { NgModule } from '@angular/core';
import { CommonModule } from '../stakeholder/stakeholder-edit/node_modules/@angular/common';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '../stakeholder/stakeholder-edit/node_modules/@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [AuthLoginComponent, AuthSignUpComponent],
    providers: [AuthService],
    bootstrap: [AuthLoginComponent]
})
export class AuthModule { }
