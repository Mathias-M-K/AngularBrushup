import { Component,HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
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

export class WelcomeComponent implements OnInit {
  isOpen = true;

  showAnimationPanel : boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

  toggleAnimationPanel():void{
    this.showAnimationPanel = !this.showAnimationPanel;
  }

}
