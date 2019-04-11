import { Component, OnInit } from '@angular/core';
import { Condicion } from '../condicion';
import { CondicionService } from '../condicion.service';
import { Router } from '@angular/router';
import {CondicionDetail} from '../condicion-detail';

@Component({
  selector: 'app-condicion-list',
  templateUrl: './condicion-list.component.html',
  styleUrls: ['./condicion-list.component.css']
})
export class CondicionListComponent implements OnInit {

  constructor(private condicionService: CondicionService,private router: Router) { }

  condiciones: Condicion[];
  condicion_id:number;
  selectedCondicion: CondicionDetail;

  getCondiciones(): void {
    this.condicionService.getCondiciones().subscribe(condiciones => this.condiciones = condiciones);
  }

  onSelected(condicion_id: number): void {
    this.condicion_id = condicion_id;
    this.selectedCondicion = new CondicionDetail();
    console.log("condicion: ", condicion_id);
    this.condicionService.getCondicionesDetail(condicion_id).subscribe(o => {this.selectedCondicion = o;
      console.log("EN  ls lista") ;
     console.log(o) ;
    });
  }

  ngOnInit() {
    this.getCondiciones();
  }

}
