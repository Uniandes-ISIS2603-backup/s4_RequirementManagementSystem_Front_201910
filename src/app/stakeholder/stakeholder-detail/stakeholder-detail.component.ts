import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from 'src/app/stakeholder/stakeholder-list/node_modules/@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'src/app/stakeholder/stakeholder-create/node_modules/ngx-toastr';

import {StakeholderService} from '../stakeholder.service';
import {Stakeholder} from '../stakeholder';


@Component({
    selector: 'app-stakeholder-detail',
    templateUrl: './stakeholder-detail.component.html',
    styleUrls: ['./stakeholder-detail.component.css']
})
export class StakeholderDetailComponent implements OnInit, OnDestroy {

    /**
    * El constructor del componente
    * @param StakeholderService El servicio del stakeholder que se comunica con API
    * @param route La ruta para obtener id del stakeholder
    * @param router La ruta usada para refrescar el componente
    * @param toastrService El toastr para mostrar mensaje a usuario
    */
    constructor(
        private StakeholderService: StakeholderService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {

        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * El id del stakeholder capturado del path
    */
    Stakeholder_id: number;

    /**
    * El stakeholder a mostrar detalles
    */
    Stakeholder: Stakeholder;

    /**
    * The other Stakeholders shown in the sidebar
    */
    other_Stakeholders: Stakeholder[];

    /**
    * The suscription which helps to know when a new Stakeholder
    * needs to be loaded
    */
    navigationSubscription;


    /**
     * The child StakeholderReviewListComponent
     */
    @ViewChild(StakeholderReviewComponent) reviewListComponent: StakeholderReviewComponent;

    /**
     * The child StakeholderReviewListComponent
     */
    @ViewChild(StakeholderAddReviewComponent) reviewAddComponent: StakeholderAddReviewComponent;

    toggleReviews(): void {
        if (this.reviewAddComponent.isCollapsed == false) {
            this.reviewAddComponent.isCollapsed = true;
        }
        this.reviewListComponent.isCollapsed = !this.reviewListComponent.isCollapsed;
    }

    toggleCreateReview(): void {
        if (this.reviewListComponent.isCollapsed == false) {
            this.reviewListComponent.isCollapsed = true;
        }
        this.reviewAddComponent.isCollapsed = !this.reviewAddComponent.isCollapsed;
    }


    /**
    * The method which retrieves the details of the Stakeholder that
    * we want to show
    */
    getStakeholder(): void {
        this.StakeholderService.getStakeholder(this.Stakeholder_id)
            .subscribe(Stakeholder => {
                this.Stakeholder = Stakeholder;
            });
    }

    /**
    * This method retrieves all the Stakeholders in the Stakeholderstore to show them in the list
    */
    getOtherStakeholders(): void {
        this.StakeholderService.getStakeholders()
            .subscribe(Stakeholders => {
                this.other_Stakeholders = Stakeholders;
                this.other_Stakeholders = this.other_Stakeholders.filter(Stakeholder => Stakeholder.id !== this.Stakeholder_id);
            });
    }

    /**
     * The function called when a review is posted, so that the child component can refresh the list
     */
    updateReviews(): void {
        this.getStakeholder();
        this.reviewListComponent.updateReviews(this.Stakeholder.reviews);
        this.reviewListComponent.isCollapsed = false;
        this.reviewAddComponent.isCollapsed = true;
    }

    /**
* This function deletes the Stakeholder from the StakeholderStore 
*/
    deleteStakeholder(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a Stakeholder',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this Stakeholder?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.StakeholderService.deleteStakeholder(this.Stakeholder_id).subscribe(Stakeholder => {
                            this.toastrService.success("The Stakeholder  ", "Stakeholder deleted");
                            this.router.navigate(['Stakeholders/list']);
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the Stakeholder and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.Stakeholder_id = +this.route.snapshot.paramMap.get('id');
        this.Stakeholder = new Stakeholder();
        this.getStakeholder();
        this.getOtherStakeholders();
    }

    /**
    * This method helps to refresh the view when we need to load another Stakeholder into it
    * when one of the other Stakeholders in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
