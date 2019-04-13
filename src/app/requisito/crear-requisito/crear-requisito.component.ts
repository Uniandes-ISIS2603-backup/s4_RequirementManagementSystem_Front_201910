import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';
import { RequisitoService } from '../requisito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-requisito',
  templateUrl: './crear-requisito.component.html',
  styleUrls: ['./crear-requisito.component.css']
})
/**
 * Componente que crea un nuevo requisito.
 */
export class CrearRequisitoComponent implements OnInit {

  // Objeto auxiliar utilizado en la creación del Requisito a partir del JSON fetcheado de la DB. 
  objeto: any = {};

  // El requisito a crear.
  req: Requisito;
  
  /**
   * Constructor del componente de requisitos, es el punto de inyección del servicio de Requisitos. 
   * @param service El servicio de angular que es inyectado al componente de requisitos.
   * @param router La funcionalidad de ruteo de angular, se usa para la navegación entre rutas.
   */
  constructor(private service: RequisitoService, private router: Router) 
  {
    
  }

  // Método que describe el comportamiento pos creación de un componente de visualización de requisito. No se implementa. 
  ngOnInit()
  {

  }

  /**
   * Método para crear un Requisito y llamar el servicio para hacer el POST.
   */
  crearObjeto()
  {
    
    this.req = this.objeto;
    console.log(this.req);
    this.service.addRequisito(this.req).subscribe((req) => {this.req = req});
    this.router.navigate['/requisitos'];
    alert("Requisito creado exitosamente");
      // Necesito commitear por favor    
  }

}
