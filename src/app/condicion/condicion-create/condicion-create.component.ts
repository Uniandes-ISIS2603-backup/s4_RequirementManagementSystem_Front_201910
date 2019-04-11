import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condicion } from '../../condicion/condicion';
import { CondicionService } from '../../condicion/condicion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-condicion-create',
  templateUrl: './condicion-create.component.html',
  styleUrls: ['./condicion-create.component.css']
})
export class CondicionCreateComponent implements OnInit {

  constructor(private condicionService: CondicionService, private toastrService:ToastrService, private route: ActivatedRoute) { }

  condicion:Condicion;

  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();

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

  cancelCreation(): void {
    this.cancel.emit();
 }

  ngOnInit() {
    this.condicion = new Condicion();

  }

}
