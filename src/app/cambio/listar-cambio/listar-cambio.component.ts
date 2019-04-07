import {Component, OnInit} from '@angular/core';
import {Cambio} from '../cambio';
import {CambioService} from '../cambio.service';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cambio',
  templateUrl: './listar-cambio.component.html',
  styleUrls: ['./listar-cambio.component.css']
})
export class ListarCambioComponent implements OnInit {

  constructor(
    private cambioService: CambioService, private router: Router) {}

    cambios: Cambio[];
    cambio_id: number;
    fechaYHora: Date;
    
    getCambios(): void {
      this.cambioService.getCambios().subscribe(cambios => {this.cambios = cambios;});
      this.fechaYHora = new Date();
      this.fechaYHora.toDateString;
    }


  ngOnInit() {

      this.getCambios();
        
  }

}
