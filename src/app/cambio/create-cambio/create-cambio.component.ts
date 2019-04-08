import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { CambioService } from '../cambio.service';
import { Router } from '@angular/router';
import { Cambio } from '../cambio';

@Component({
  selector: 'app-create-cambio',
  templateUrl: './create-cambio.component.html',
  styleUrls: ['./create-cambio.component.css']
})
export class CreateCambioComponent implements OnInit {

  constructor(private cambioService: CambioService, router: Router) { }

  cambio: Cambio;

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

createCambio(): Cambio {
        console.log(this.cambio);
        this.cambioService.createCambio(this.cambio)
            .subscribe((cambio) => {
                this.cambio = cambio;
                this.create.emit();

            } );
        return this.cambio;
    }

    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.cambio = new Cambio();
    }


}
