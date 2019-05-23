import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';
import { RequisitoService } from '../requisito.service';
import { ActivatedRoute, Router } from '@angular/router';

   
@Component({
  selector: 'app-modificar-requisito',
  templateUrl: './modificar-requisito.component.html',
  styleUrls: ['./modificar-requisito.component.css']
})
export class ModificarRequisitoComponent implements OnInit {
 //Objeto que permite modificar un Requisito a traves del formulario
  objeto: any = {};

  // El requisito a ser creado
  req: Requisito;
  constructor(private reqS: RequisitoService, private router: Router, private route: ActivatedRoute) 
  {
    
  }

  /**
   * Método de la lógica a aplicar post-inicialización del componente. No se implementa. 
   */
  ngOnInit() {
  }

  /**
   * Método que permite hacer la actualización del requisito con los datos pasados por parámetro. 
   * Para su funcionamiento correcto, se necesita el paso de todos los parámetros. Falta implementar la
   * Funcionalidad de que adopte los atributos que el objeto tenía antes del update cuando quieren hacerse
   * Actualizaciones parciales. 
   */
  actualizarRequisito(): void
  {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    this.req = this.objeto;
    this.reqS.updateRequisito(proyectoId, objetivoId, requisitoId, this.req).subscribe((req)=> {
      this.req = req;
    })
    // this.intermediateNavigation();
    // this.finalDestination(id);
  }
  
  //--------------------------------------------------------
  // Métodos auxiliares para refrescar fetcheando desde DB. 
  //--------------------------------------------------------

  // intermediateNavigation()
  // {
  //   this.router.navigate(['/requisitos/', ]);
  // }
  // finalDestination(id: number)
  // {
  //   this.router.navigate(['/requisitos/', id]);
  // }

  //--------------------------------------------------------
 

  /**
   * Respuesta a la cancelación de la actualización. Se devuelve al menú de visualización de requisitos. 
   */
  // cancelarActualizacion(): void
  // {
  //   this.router.navigate(['/requisitos']);
  //   alert("Modificación de requisito cancelada");
  // }
  
}


