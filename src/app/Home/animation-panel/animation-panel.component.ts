import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animation-panel',
  templateUrl: './animation-panel.component.html',
  styleUrls: ['./animation-panel.component.css'],
  animations: [
    trigger('showHide', [
      // ...
      transition(':enter', [
        style({
          opacity: 0,
          marginTop:50
        }),
        animate('600ms ease-out', style({ opacity: 1,marginTop:0 })),
      ]),
      transition(':leave', [
        animate('300ms', style({
          opacity: 0,
          marginTop:50 }))
      ])
    ]),
  ]

})

export class AnimationPanelComponent implements OnInit {

  isOpen = true;



  ngOnInit(): void {

  }



}
