import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CasodeusoService } from '../casodeuso.service';
import { CasodeusoDetail } from '../casodeuso-detail';

@Component({
  selector: 'app-casodeuso-detail',
  templateUrl: './casodeuso-detail.component.html',
  styleUrls: ['./casodeuso-detail.component.css']
})
export class CasodeusoDetailComponent implements OnInit {

  constructor(private casodeusoService: CasodeusoService,
    private route: ActivatedRoute) 
    {
      console.log(this.casodeusoDetail);
      
     }


  @Input()   casodeusoDetail: CasodeusoDetail;

  casodeuso_id: number;

  //loader: any;


  getCasosdeusoDetail(): void {

    this.casodeusoService.getCasosdeusoDetail(this.casodeuso_id)
    .subscribe(casodeusoDetail => {
      
      this.casodeusoDetail = casodeusoDetail;
      console.log("-->",this.casodeusoDetail.caminos);
    });  }

  /*
  onLoad(params) {

    this.casodeuso_id = parseInt(params['id']);
    console.log(" en detail " + this.casodeuso_id);
    this.casodeusoDetail = new CasodeusoDetail();
    this.getCasosdeusoDetail();
  }*/

  ngOnInit() {
    console.log(this.casodeusoDetail)
    this.getCasosdeusoDetail();
  }

  /*ngOnDestroy() {
    this.loader.unsubscribe();
  }
*/
}
