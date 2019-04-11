import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CondicionService } from '../condicion.service';
import { CondicionDetail } from '../condicion-detail';


@Component({
  selector: 'app-condicion-detail',
  templateUrl: './condicion-detail.component.html',
  styleUrls: ['./condicion-detail.component.css']
})
export class CondicionDetailComponent implements OnInit {

  constructor(private condicionService: CondicionService,
    private route: ActivatedRoute) { }

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

}
