import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,                  // ⬅ You should add this
  imports: [RouterOutlet, DataBindingDemoComponent],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'data-binding-demo';
}
