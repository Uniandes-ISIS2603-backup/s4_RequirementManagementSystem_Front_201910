import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { StakeholderService } from '../../stakeholder/stakeholder.service';
import { Stakeholder } from '../../stakeholder/stakeholder';
import { OrganizacionService } from '../../organizacion/organizacion.service';
import { Organizacion } from '../../organizacion/organizacion';

@Component({
  selector: 'app-listar-inicio',
  templateUrl: './listar-inicio.component.html',
  styleUrls: ['./listar-inicio.component.css']
})
/**
 * Component that has the navigation bar of the home page.
 */
export class ListarInicioComponent implements OnInit {

  constructor(private stakeholderService: StakeholderService, private organizacionService:OrganizacionService) { }

stakeholders: Stakeholder[];
organizaciones: Organizacion[];

  mostrarStakeholders(){
    this.stakeholderService.getStakeholders().subscribe(staks => {this.stakeholders = staks; console.log(staks);
    });
    
  }

  mostrarOrganizaciones(){
    this.organizacionService.getOrganizaciones().subscribe(orgs => {this.organizaciones = orgs; console.log(orgs);
    });
    
  }

  ngOnInit() {
    $('.hover-box').mouseenter(function(){
			$(this).find('.content').addClass('hover-content');	
		});

		$('.hover-box').mouseleave(function(){
			$(this).find('.content').removeClass('hover-content');	
    });
    this.mostrarStakeholders();

    this.mostrarOrganizaciones();
    // var Expand = (function() {
    //   var tile = $('.strips__strip');
    //   var tileLink = $('.strips__strip > .strip__content');
    //   var tileText = tileLink.find('.strip__inner-text');
    //   var stripClose = $('.strip__close');
      
    //   var expanded  = false;
    
    //   var open = function() {
          
    //     var tile = $(this).parent();
    
    //       if (!expanded) {
    //         tile.addClass('strips__strip--expanded');
    //         // add delay to inner text
    //         tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
    //         stripClose.addClass('strip__close--show');
    //         stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
    //         expanded = true;
    //       } 
    //     };
      
    //   var close = function() {
    //     if (expanded) {
    //       tile.removeClass('strips__strip--expanded');
    //       // remove delay from inner text
    //       tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
    //       stripClose.removeClass('strip__close--show');
    //       stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
    //       expanded = false;
    //     }
    //   }
    
    //     var bindActions = function() {
    //       tileLink.on('click', open);
    //       stripClose.on('click', close);
    //     };
    
    //     var init = function() {
    //       bindActions();
    //     };
    
    //     return {
    //       init: init
    //     };
    
    //   }());
    
    // Expand.init();
  }
  

}
