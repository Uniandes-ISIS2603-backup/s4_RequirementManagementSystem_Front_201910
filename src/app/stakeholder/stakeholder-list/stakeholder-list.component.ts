import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from 'src/app/stakeholder/stakeholder-create/node_modules/@angular/router';
import 'rxjs/add/operator/filter';


import {Stakeholder} from '../../Stakeholder/Stakeholder';
import {StakeholderService} from '../../Stakeholder/Stakeholder.service';
@Component({
    selector: 'app-Stakeholder-list',
    templateUrl: './Stakeholder-list.component.html',
    styleUrls: ['./Stakeholder-list.component.css']
})
export class StakeholderListComponent implements OnInit {

    /**
    * Lista de stakeholders
    */
    @Input() Stakeholders: Stakeholder[];

    /**
    * Constructor
    */
    constructor(private StakeholderService: StakeholderService, private route: ActivatedRoute) {}

    allStakeholders: string = 'no';

    /**
    * Obtener lista de todos los stakeholders
    */
    getStakeholders(): void {
        this.StakeholderService.getStakeholders()
            .subscribe(Stakeholders => {
                this.Stakeholders = Stakeholders;
            });
    }

    /**
    * Inicializacion del componente
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allStakeholders)
            .subscribe(params => {
                console.log(params);

                this.allStakeholders = params.allStakeholders;
                console.log(this.allStakeholders);
            });
        if (this.allStakeholders == 'yes') {
            console.log("allStakeholders");

            this.getStakeholders();
        }
    }

}
