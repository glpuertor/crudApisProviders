//angular
import { Component, OnInit, ViewChild, inject, Type  } from '@angular/core';
//bootstrab
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { generalService } from 'src/app/services/general.service';
import { NgFor } from '@angular/common';

import { NgbPaginationModule, NgbModalConfig  } from '@ng-bootstrap/ng-bootstrap';

//service

@Component({
  selector: 'app-Providers',
  templateUrl: './providers.component.html',
  standalone: true,
	imports: [NgbCarouselModule, FormsModule, NgFor, NgbPaginationModule],
  styleUrls: ['./providers.component.css']
})

export class ProvidersPageComponent implements OnInit {
  providers:any;
  page=4;
  message:any;
  modalId:any;
  modalName:any;
  constructor(private service:generalService, private Router:Router,
    config: NgbModalConfig,
		private modalService: NgbModal,
  ){
		config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit():void{
    this.allProviders();
  }

  provider(id:any=0){
      this.Router.navigate(['provider/'+id]);
  }

  allProviders(){
    this.service.getProviders().subscribe((response:any) => {
      this.providers=response;

      console.log(this.providers);

      //return this.providers;
      //console.log("respuesta ejecutada getReservation===>",this.getReservationResponse);
    },error =>{
      console.log(error)
    });
  }

  destroyProvider(id:any=0){
    if(id!=0){
      this.service.destroyProvider(id).subscribe((response:any) => {
        this.message=response.message;
        //return this.providers;
        //console.log("respuesta ejecutada getReservation===>",this.getReservationResponse);
        this.allProviders();
      },error =>{
        console.log(error)
      });
    }
  }
	open(content:any, id:any, name:any) {
    this.modalId=id;
    this.modalName=name;
		this.modalService.open(content);
	}
}

