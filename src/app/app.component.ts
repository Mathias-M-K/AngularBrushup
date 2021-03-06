import {Component} from "@angular/core";

@Component({
  selector: 'ab-root',

  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand' style="padding-left: 20px">{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
      </ul>
    </nav>
    <div class='container' style="padding-top: 50px">
      <router-outlet></router-outlet>
    </div>
  `,
})

export class AppComponent{
  pageTitle:string = "Mathias SuperStore";
}
