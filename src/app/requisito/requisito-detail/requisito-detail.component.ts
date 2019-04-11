import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';
import { RequisitoService } from '../requisito.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-requisito-detail',
  templateUrl: './requisito-detail.component.html',
  styleUrls: ['./requisito-detail.component.css']
})
export class RequisitoDetailComponent implements OnInit {

  req: Requisito;
  constructor(private location: Location, private reqService: RequisitoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRequisito();
  }

  getRequisito(): void 
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reqService.getRequisito(id)
      .subscribe(req=> this.req = req);
  }

  
}
