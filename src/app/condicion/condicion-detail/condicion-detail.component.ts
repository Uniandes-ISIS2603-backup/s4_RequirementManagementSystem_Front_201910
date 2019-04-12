import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CondicionService } from '../condicion.service';
import { CondicionDetail } from '../condicion-detail';
import { CondicionUpdateComponent } from '../condicion-update/condicion-update.component';

@Component({
  selector: 'app-condicion-detail',
  templateUrl: './condicion-detail.component.html',
  styleUrls: ['./condicion-detail.component.css']
})
export class CondicionDetailComponent implements OnInit {

  public isCollapsed = false;

  constructor(private condicionService: CondicionService,
    private route: ActivatedRoute) {      
      console.log(this.condicionDetail);
    }

  @ViewChild(CondicionUpdateComponent) update: CondicionUpdateComponent;


  @Input()   condicionDetail: CondicionDetail;

  //condicion_id: number;

  getCondicionesDetail(): void {

    this.condicionService.getCondicionesDetail(this.condicionDetail.id)
    .subscribe(condicionDetail => {
      
      this.condicionDetail = condicionDetail;
    });  }

  ngOnInit() {
    console.log("Detail:  ", this.condicionDetail)
    this.getCondicionesDetail();
  }

  updateCondicion(): void{
    this.update.getCondicion(this.condicionDetail.id);

  }

}
