import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { User } from './user';

const API_URL = 'http://0e049f17.ngrok.io/s4_requirement-api/api/usuarios';
/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService, private http: HttpClient) { }

    getUsuarios(): Observable<User[]> {
        return this.http.get<User[]>(API_URL);
    }

    /**
    * Crea una nueva User
    * @param User
    * @returns El User creado, null si no se creo exitosamente  
    */
    createUsuario(User): Observable<User> {
        return this.http.post<User>(API_URL, User);
    }

    /**
    * Retorna usuario con id dado por parametro extraido del api
    * @returns The author details
    */
    getUsuario(UserId): Observable<User> {
        return this.http.get<User>(API_URL + '/' + UserId);
    }

    /**
        * Actualiza una User
        * @param User The updated User
        * @returns The updated User
        */
    updateUsuario(User): Observable<User> {
        return this.http.put<User>(API_URL + '/' + User.id, User);
    }

    /**
    * Elimina una User
    * @param UserId The User's id
    * @returns True if the User was deleted, false otherwise
    */
    deleteUsuario(UserId): Observable<User> {
        return this.http.delete<User>(API_URL + '/' + UserId);
    }

    start(): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions([]);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else {
            this.setClientRole();
        }
    }

    setGuestRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClientRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENT', ['leave_review']);
        localStorage.setItem('role', 'CLIENT');
    }

    setAdministratorRole(): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole(): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login(role): void {
        if (role === 'Administrator') {
            this.setAdministratorRole();
        } else {
            this.setClientRole()
        }
        this.router.navigateByUrl('/');
    }

    /**
     * Logs the user out
     */
    logout(): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}
