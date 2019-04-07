import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {StakeholderService} from '../stakeholder.service';
import {Stakeholder} from '../stakeholder';

@Component({
    selector: 'app-Stakeholder-create',
    templateUrl: './Stakeholder-create.component.html',
    styleUrls: ['./Stakeholder-create.component.css'],
    providers: [DatePipe]
})
export class StakeholderCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param StakeholderService The Stakeholders' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private StakeholderService: StakeholderService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new Stakeholder
    */
    Stakeholder: Stakeholder;

    /**
    * Cancels the creation of the new Stakeholder
    * Redirects to the Stakeholders' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The Stakeholder wasn\'t created', 'Stakeholder creation');
        this.router.navigate(['/Stakeholders/list']);
    }

    /**
    * Creates a new Stakeholder
    */
    createStakeholder(): Stakeholder {
        this.StakeholderService.createStakeholder(this.Stakeholder)
            .subscribe(Stakeholder => {
                this.Stakeholder.id = Stakeholder.id;
                this.router.navigate(['/Stakeholders/' + Stakeholder.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.Stakeholder;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.Stakeholder = new Stakeholder();
    }

}
