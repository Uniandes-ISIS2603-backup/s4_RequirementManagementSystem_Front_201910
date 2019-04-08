import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Stakeholder } from '../../Stakeholder/Stakeholder';
import { StakeholderService } from '../../Stakeholder/Stakeholder.service';
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
    constructor(private StakeholderService: StakeholderService, private route: ActivatedRoute) { }

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
        this.getStakeholders();
    }
}


