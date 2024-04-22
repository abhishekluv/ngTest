import { Component } from '@angular/core'; // Import Component decorator

@Component({
  selector: 'app-root', // Component selector
  templateUrl: './app.component.html', // Template URL
  styleUrls: ['./app.component.css'] // Styles URL
})
export class AppComponent { // AppComponent class
  title = 'Angular Testing'; // Default title property
}
