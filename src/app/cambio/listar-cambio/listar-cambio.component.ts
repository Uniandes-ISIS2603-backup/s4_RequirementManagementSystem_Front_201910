import {Component, OnInit} from '@angular/core';
import {Cambio} from '../cambio';
import {CambioService} from '../cambio.service';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';
import { CambioDetail } from '../cambio-detail';

@Component({
  selector: 'app-listar-cambio',
  templateUrl: './listar-cambio.component.html',
  styleUrls: ['./listar-cambio.component.css']
})
export class ListarCambioComponent implements OnInit {

  constructor(private cambioService: CambioService, private router: Router) { }


    cambios: Cambio[];
    cambio_id: number;
    selectedCambio: CambioDetail;
    
    getCambios(): void {
      this.cambioService.getCambios().subscribe(cambios => this.cambios = cambios);
    }


    onSelected(cambio_id: number): void {
      this.cambio_id = cambio_id;
      this.selectedCambio = new CambioDetail();
      console.log("cambio: ", cambio_id);
      this.cambioService.getCambioDetail(cambio_id).subscribe(o => {this.selectedCambio = o;
        console.log("En  la lista") ;
       console.log(o) ;
      });
    }

  ngOnInit() {

      this.getCambios();
        
  }

}



 
