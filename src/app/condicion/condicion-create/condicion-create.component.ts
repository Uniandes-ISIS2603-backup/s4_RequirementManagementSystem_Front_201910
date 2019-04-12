import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condicion } from '../../condicion/condicion';
import { CondicionService } from '../../condicion/condicion.service';
import { ToastrService } from 'ngx-toastr';

/**
 * Component that creates a new condition
 */
@Component({
  selector: 'app-condicion-create',
  templateUrl: './condicion-create.component.html',
  styleUrls: ['./condicion-create.component.css']
})
export class CondicionCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param condicionService The condition's service provider
    * @param toastrService The toastr to show messages to the user 
    * @param router The router of the component
    */
  constructor(private condicionService: CondicionService, private toastrService:ToastrService, private route: ActivatedRoute) { }

  /**
 * The new condition to be created.
 * It is a detail because of the comment on the condition.
 */
  condicion:Condicion;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create an condition.
    */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user created a new condition.
   */
  @Output() create = new EventEmitter();

  /**
 * Creates a new condition. 
 */
  createCondicion(): Condicion {
    console.log(this.condicion);
   this.condicionService.createCondicion(this.condicion)
       .subscribe((condicion) => {
           this.condicion = condicion;
           this.create.emit();
           this.toastrService.success("The change was created", "Change creation");
       }, err => {
           this.toastrService.error(err, "Error");
       });
   return this.condicion;
  }

  /**
* Informs the parent component that the user no longer wants to create an approbation.
*/
  cancelCreation(): void {
    this.cancel.emit();
 }

 /**
* This function will initialize the component
*/
  ngOnInit() {
    this.condicion = new Condicion();

  }

}
