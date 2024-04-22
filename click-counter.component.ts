import { Component } from '@angular/core'; // Import the Component decorator from Angular core

@Component({
  selector: 'app-click-counter', // Define the selector for the component
  template: `<button (click)="increment()">Increment</button><p>{{count}}</p>`, // Inline template with a button and paragraph to display the count
  styleUrls: ['./click-counter.component.css'] // Stylesheet for the component
})
export class ClickCounterComponent {
  count = 0; // Initialize the count property to zero

  increment() { // Method to increment the count
    this.count++; // Increment the count by one
  }
}
