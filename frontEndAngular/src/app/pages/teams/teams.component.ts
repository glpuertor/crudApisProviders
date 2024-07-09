//angular
import { Component, OnInit, ViewChild } from '@angular/core';
//bootstrab
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//service

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  standalone: true,
	imports: [NgbCarouselModule, FormsModule],
  styleUrls: ['./teams.component.css']
})

export class teamsComponent implements OnInit {
	images = [1, 2, 3].map((n) => `../assets/img/banner${n}.jpg`);

  constructor(

  ){


  }

  ngOnInit(): void {
    //test



    //console.log("Date = " + date);
    /** spinner starts on init */
  }
}
