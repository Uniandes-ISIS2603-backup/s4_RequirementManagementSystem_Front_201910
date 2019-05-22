import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { ROUTER_FORROOT_GUARD, routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private router:Router
    ) { }

    usuario: User;
    usuarios:User[];
    tipos: String[];
    nombre:String
    existe:Boolean;

    /**
    * Obtener lista de todas las organizacions
    */
   getUsuarios(): void {
    this.authService.getUsuarios().subscribe(usuarios => { this.usuarios = usuarios; });
}

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        console.log("lenght usuarios:   ", this.usuarios.length);
        console.log("nombre del usuario:   ", this.usuario.usuario);
        console.log("contrasena del usuario:   ", this.usuario.contrasena);
        console.log("tipo del usuario:   ", this.usuario.tipo);
        for(let i = 0; i<this.usuarios.length; i++){
            if(this.usuarios[i].usuario == this.usuario.usuario && this.usuarios[i].contrasena == this.usuario.contrasena && this.usuarios[i].tipo == this.usuario.tipo){
                this.existe = true;
            }
        }
        if(this.existe){
        this.authService.login(this.usuario.tipo);
        this.toastrService.success('Logged in');
        this.router.navigateByUrl('/start');
        }
        else {
            this.toastrService.success('Usuario o contraseña invalida')
        }
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new User();
        this.getUsuarios();
        this.tipos = ['Administrador', 'Cliente', 'Desarrollador'];
    }

}
