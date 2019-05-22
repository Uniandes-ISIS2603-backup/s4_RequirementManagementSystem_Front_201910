import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
    ) { }

    usuario: User;
    usuarios: User[];
    tipos: String[];
    nombre: String
    existe: Boolean = false;


    //Crear usuario
    createUsuario(): User {
        this.authService.createUsuario(this.usuario).subscribe(usuario => {
            this.usuario = usuario;
        });
        return this.usuario;
    }

    /**
    * Obtener lista de todas las organizacions
    */
    getUsuarios(): void {
        this.authService.getUsuarios().subscribe(usuarios => { this.usuarios = usuarios; });
    }

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        console.log("nombre del usuario:   ", this.usuario.usuario);
        console.log("contrasena del usuario:   ", this.usuario.contrasena);
        console.log("tipo del usuario:   ", this.usuario.tipo);
        for (var i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].usuario == this.usuario.usuario && this.usuarios[i].tipo == this.usuario.tipo) {
                this.existe = true;
            }
        }
        if (!this.existe) {
            console.log("nombre del usuario:   ", this.usuario.usuario);
            console.log("contrasena del usuario:   ", this.usuario.contrasena);
            console.log("tipo del usuario:   ", this.usuario.tipo);
            this.createUsuario();
            this.authService.login(this.usuario.tipo);
            this.toastrService.success('Successfully signed up')
        }

        else {
            this.toastrService.error('Ya existe un usuario con ese nombre de ese tipo')
        }
    }

    /**
    * This function will initialize the component.
    *  It specifies the types of users of the application
    */
    ngOnInit() {
        this.usuario = new User();
        this.getUsuarios();
        this.usuario.id = Math.floor(Math.random() * 99999) + 999;
        this.tipos = ['Administrador', 'Cliente', 'Desarrollador'];
        this.existe = false;
    }

}
