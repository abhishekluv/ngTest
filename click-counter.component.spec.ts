import { ComponentFixture, TestBed } from '@angular/core/testing'; // Import necessary testing tools
import { ClickCounterComponent } from './click-counter.component'; // Import the component to test

describe('ClickCounterComponent', () => { // Define a test suite for ClickCounterComponent
  let component: ClickCounterComponent; // Declare a variable for the component instance
  let fixture: ComponentFixture<ClickCounterComponent>; // Declare a variable for the component fixture

  beforeEach(async () => { // Setup that is run before each test
    await TestBed.configureTestingModule({ // Configure the test module
      declarations: [ClickCounterComponent] // Declare the component to be tested
    }).compileComponents(); // Compile the template and CSS for the component
    fixture = TestBed.createComponent(ClickCounterComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the instance of the component from the fixture
    fixture.detectChanges(); // Trigger initial data binding and lifecycle hooks
  });

  it('should increment counter when button is clicked', () => { // Define a test case to check if the button click increments the counter
    const button = fixture.nativeElement.querySelector('button'); // Find the button element within the component's DOM
    button.click(); // Simulate a click event on the button
    expect(component.count).toBe(1); // Expect that the count property of the component is incremented to 1
  });
});
