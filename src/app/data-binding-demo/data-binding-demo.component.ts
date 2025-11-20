import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {

  //INTERPOLATION
  // title: string = "My First App!";
  // description = "This is my new Angular Application"

  //PROPERTY BINDING
  // imageUrl = './soc-logo.jpg';
  // w = 100;
  // h = 100;
  // altText = 'School of Computing Logo';

  //STYLE BINDING
  // textColor='red'

  //CLASS BINDING
  isHighlighted= true;
}
