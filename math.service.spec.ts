import { TestBed } from '@angular/core/testing'; // Import TestBed to set up and configure the test environment
import { MathService } from './math.service'; // Import the service to test

describe('MathService', () => { // Create a test suite for MathService
  let service: MathService; // Declare a variable to hold the service instance

  beforeEach(() => { // Setup run before each test case
    TestBed.configureTestingModule({ // Initialize the testing module
      providers: [MathService] // Provide the service to be tested
    });
    service = TestBed.inject(MathService); // Instantiate the service using TestBed
  });

  it('should be created', () => { // Test case to check if the service is created successfully
    expect(service).toBeTruthy(); // Assertion to check truthiness of the service instance
  });

  it('should return 10 when adding 6 and 4', () => { // Test case to test the add method
    const result = service.add(6, 4); // Call the add method with arguments 6 and 4
    expect(result).toBe(10); // Assert that the result is 10
  });
});
