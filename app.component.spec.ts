import { ComponentFixture, TestBed } from '@angular/core/testing'; // Import necessary testing tools
import { AppComponent } from './app.component'; // Import the component to test

describe('AppComponent', () => { // Define a test suite for AppComponent
  let component: AppComponent; // Declare a variable for the component
  let fixture: ComponentFixture<AppComponent>; // Declare a variable for the component fixture

  beforeEach(async () => { // Setup that is run before each test
    await TestBed.configureTestingModule({ // Configure the testing module
      declarations: [AppComponent] // Declare the component
    }).compileComponents(); // Compile the template and CSS
    fixture = TestBed.createComponent(AppComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the instance of the component
  });

  it(`should have as title 'Hello World'`, () => { // Test case for checking title property
    component.title = 'Hello World'; // Set the component's title property
    expect(component.title).toEqual('Hello World'); // Assert that the title property is 'Hello World'
  });
});
