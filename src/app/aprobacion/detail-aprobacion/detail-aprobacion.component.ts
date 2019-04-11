import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AprobacionService } from '../aprobacion.service';
import { AprobacionDetail } from '../aprobacion-detail';
import { UpdateAprobacionComponent } from '../update-aprobacion/update-aprobacion.component';

@Component({
  selector: 'app-detail-aprobacion',
  templateUrl: './detail-aprobacion.component.html',
  styleUrls: ['./detail-aprobacion.component.css']
})
export class DetailAprobacionComponent implements OnInit {
  public isCollapsed = false;
  constructor(
    private aprobacionService: AprobacionService,
    private route: ActivatedRoute
  ) { }

  @Input() aprobacionDetail: AprobacionDetail;

    aprobacion_id: number;

  @ViewChild(UpdateAprobacionComponent) update: UpdateAprobacionComponent;

  getCambioDetail(): void {
    this.aprobacionService.getAprobacionDetail(this.aprobacion_id)
      .subscribe(aprobacionDetail => {
        
        this.aprobacionDetail = aprobacionDetail;
      });
  }

  updateAprobacion(): void{
    this.update.getAprobacion(this.aprobacionDetail.id);
  }

    ngOnInit() {
      
    this.aprobacion_id = +this.route.snapshot.paramMap.get('id');
    console.log("detail: ", this.aprobacion_id);
    if (this.aprobacion_id) {
      this.aprobacionDetail = new AprobacionDetail();
      this.getCambioDetail();
    }
    console.log("Detail:  ", this.aprobacionDetail)

    }

}
