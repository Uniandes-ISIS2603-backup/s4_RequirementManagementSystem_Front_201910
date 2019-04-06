import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import {CreateAprobacionComponent} from './aprobacion/create-aprobacion/create-aprobacion.component';


/**
 * The app component. This component is the base of s4_requirement-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s4_requirement-Front";
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: AuthService) { }

    logout(): void {
        this.authService.logout()
    }

}





