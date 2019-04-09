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
    private route: ActivatedRoute) { }

  casodeusoDetail: CasodeusoDetail;

  @Input() casodeuso_id: number;

  loader: any;


  getCasosdeusoDetail(): void {

    this.casodeusoService.getCasosdeusoDetail(this.casodeuso_id).subscribe(o => {this.casodeusoDetail = o});
  }

  onLoad(params) {

    this.casodeuso_id = parseInt(params['id']);
    console.log(" en detail " + this.casodeuso_id);
    this.casodeusoDetail = new CasodeusoDetail();
    this.getCasosdeusoDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
