import { Component, OnInit } from '@angular/core';
import { AprobacionService } from '../aprobacion.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Aprobacion } from '../aprobacion';
import { AprobacionDetail } from '../aprobacion-detail';

@Component({
  selector: 'app-listar-aprobacion',
  templateUrl: './listar-aprobacion.component.html',
  styleUrls: ['./listar-aprobacion.component.css']
})
export class ListarAprobacionComponent implements OnInit {

  constructor(private aprobacionService: AprobacionService, private router: Router) { }


    aprobaciones: Aprobacion[];
    aprobacion_id: number;
    selected: boolean;
    contador: number;
    selectedAprobacion: AprobacionDetail;
    
    getAprobaciones(): void {
      this.aprobacionService.getAprobaciones().subscribe(aprobaciones => this.aprobaciones = aprobaciones);
      
    }

    onSelected(aprobacion_id: number): void {
      this.aprobacion_id = aprobacion_id;
      this.selectedAprobacion = new AprobacionDetail();
      this.aprobacionService.getAprobacionDetail(aprobacion_id).subscribe(o => {this.selectedAprobacion = o;
        console.log("En  la lista") ;
       console.log(o) ;
      });
    }

  ngOnInit() {

      this.getAprobaciones();
        
  }

  

}
