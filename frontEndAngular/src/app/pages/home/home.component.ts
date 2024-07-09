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
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
	imports: [NgbCarouselModule, FormsModule],
  styleUrls: ['./home.component.css']
})

export class HomePageComponent implements OnInit {
	images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(

  ){


  }

  ngOnInit(): void {
    //test



    //console.log("Date = " + date);
    /** spinner starts on init */
  }
}
