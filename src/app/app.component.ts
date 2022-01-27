import {Component} from "@angular/core";

@Component({
  selector: 'ab-root',

  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>My First Component</div>
    </div>
  `
})

export class AppComponent{
  pageTitle:string = "Mathias superstore";
}
