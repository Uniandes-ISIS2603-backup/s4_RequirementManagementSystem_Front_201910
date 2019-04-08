import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';

import {StakeholderService} from '../stakeholder.service';

import {Stakeholder} from '../stakeholder';

@Component({
    selector: 'app-Stakeholder-edit',
    templateUrl: './Stakeholder-edit.component.html',
    styleUrls: ['./Stakeholder-edit.component.css'],
    providers: [DatePipe]
})
export class StakeholderEditComponent implements OnInit {

    /**
    * The constructor of the component
    * @param StakeholderService The Stakeholder service which communicates with the API
    * @param authorService The author service which communicates with the API
    * @param editorialService The editorial service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    * @param router The router which is needed to know when the component needs to reload
    * @param route The route which helps to retrieves the id of the Stakeholder to be shown
    */
    constructor(
        private StakeholderService: StakeholderService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    model: any;
    /**
    * El Stakeholder a ser actualizado
    */
    Stakeholder: Stakeholder

    Stakeholder_id: number;
    
/*     search = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
        const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
        const inputFocus$ = this.focus$;

        return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
            map(term => (term === '' ? this.authors
                : this.authors.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
        );
    } */

    formatter = (x: {name: string}) => x.name;

    /**
    * Obtener informacion del Stakeholder a ser actualizado
    */
    getStakeholder(): void {
        this.StakeholderService.getStakeholder(this.Stakeholder_id).subscribe(Stakeholder => {
            this.Stakeholder = Stakeholder;
        });
    }

    /**
    * Cancela edicion del Stakeholder
    */
    cancelEdition(): void {
        this.router.navigate(['/Stakeholders/list']);
    }

/*     addAuthor(): void {
        if (this.model != undefined && this.model.id != undefined) {
            this.Stakeholder.authors.push(this.model);
            for (let i = 0; i < this.authors.length; i++) {
                if (this.authors[i].id === this.model.id) {
                    this.authors.splice(i, 1);
                }
            }
            this.model = new Author();
        }

    }

    removeAuthor(author): void {
        this.authors.push(author);
        for (let i = 0; i < this.Stakeholder.authors.length; i++) {
            if (this.Stakeholder.authors[i].id == author.id) {
                this.Stakeholder.authors.splice(i, 1);
            }
        }
    } */

    /**
    * This function updates the Stakeholder
    */
    updateStakeholder(): void {
        this.StakeholderService.updateStakeholder(this.Stakeholder)
            .subscribe(() => {
                this.router.navigate(['/Stakeholders/' + this.Stakeholder.id]);
            });
    }

    /**
    * The function which initilizes the component
    */
    ngOnInit() {
        this.Stakeholder_id = +this.route.snapshot.paramMap.get('id');
        this.getStakeholder();
    }


}
