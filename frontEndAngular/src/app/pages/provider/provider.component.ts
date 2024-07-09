//angular
import { Component, OnInit, ViewChild } from '@angular/core';
//bootstrab
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { generalService } from 'src/app/services/general.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { NgbPaginationModule, NgbModalConfig  } from '@ng-bootstrap/ng-bootstrap';
//service

@Component({
  selector: 'app-Provider',
  templateUrl: './provider.component.html',
  standalone: true,
	imports: [NgbCarouselModule, FormsModule, NgFor],
  styleUrls: ['./provider.component.css']
})



export class ProviderPageComponent implements OnInit {
  providers:any;

  id:any=0;
  data:any={
    id:this.id,
    name:"",
    email:"",
    phone:"",
    description:"",
    status:0,

  }
  constructor(
   private service:generalService,
   private route:ActivatedRoute,
   private config: NgbModalConfig,
   private modalService: NgbModal,
  ){
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    })

  }

  ngOnInit(): void {
    if(this.id!=0){
      this.getProvider(this.id)
    }


  }

  send(){
    if(this.data.id==0){
      this.service.createProvider(this.data).subscribe((response:any) => {
        console.log(response);
        if(response.status==201 || response.status==200){
          let html=this.htmlModal();
          this.open(html);

        }
      },error =>{
        console.log(error);
        let html=this.htmlModal(error.error.errors);
        this.open(html);
      });
    }else{
      this.service.updateProvider(this.data).subscribe((response:any) => {
        console.log(response)
        if(response.status==201 || response.status==200){
          let html=this.htmlModal();
          this.open(html);
        }
      },error =>{
        let html=this.htmlModal(error.error.errors);
        this.open(html);
      });
    }

  }

  getProvider(id:any){
    this.service.getProvider(id).subscribe((response:any) => {
      this.providers=response.providers[0];
      this.data.id=this.providers.id;
      this.data.name=this.providers.name;
      this.data.phone=this.providers.phone;
      this.data.email=this.providers.email;
      this.data.description=this.providers.description;
      this.data.status=this.providers.status;
      console.log(this.data);
    },error =>{
      console.log(error);
    });
  }
  open(content:any) {

		this.modalService.open(content);
	}

  htmlModal(error:any=1){
    let html=``;
    let errors:string=JSON.stringify(error);
    if(error!=1){
      html=errors;
    }else{
      html=`
        Your provider save successfull
      `;
    }

    return html;
  }
}
