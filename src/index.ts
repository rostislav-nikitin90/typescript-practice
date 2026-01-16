// Function to display output to the terminal
function printOutput(message: string): void {
    console.log(message); // Print the provided output to the terminal
}

// Recursive function to calculate factorial
function factorial(n: number): number {
    if (n < 0) throw new Error("Negative numbers not allowed"); // Throw error for invalid input
    if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
    return n * factorial(n - 1); // Recursive case: n * factorial of (n-1)
}

// Class definition for Person
class Person {
    name: string; // Property to store person's name
    age: number;  // Property to store person's age

    constructor(name: string, age: number) {
        this.name = name; // Initialize name
        this.age = age;   // Initialize age
    }

    introduce(): void {
        // Method to print introduction message
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}

// List (array) of Person objects
const people: Person[] = [
    new Person("Arthur", 37), // Create a Person object for Arthur
    new Person("Naomi", 32), // Create a Person object for Naomi
    new Person("Raphael", 29) // Create a Person object for Raphael
];

// Asynchronous function simulating data fetching
async function fetchData(): Promise<string> {
    // Return a new Promise object that will eventually resolve to a string
    return new Promise((resolve) => {
        // Use setTimeout to simulate a delay (like waiting for data from a server)
        setTimeout(() => {
            // After 1 second, resolve the Promise with a success message
            resolve("Data fetched successfully!");
        }, 1000); // Delay duration in milliseconds (1000 ms = 1 second)
    });
}

// Function that demonstrates throwing exceptions
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!"); // Throw error if denominator is zero
    }
    return a / b; // Return result of division
}

// Main function to tie everything together
async function main() {
    printOutput("Welcome to the TypeScript practice demo!"); // Print welcome message

    // Demonstrate recursion
    try {
        const result = factorial(5); // Calculate factorial of 5
        printOutput(`Factorial of 5 is: ${result}\n`); // Print result
    } catch (error) {
        console.error("Error in factorial:", (error as Error).message); // Handle errors gracefully
    }

    // Demonstrate classes and lists
    printOutput("Introducing our people:");
    for (const person of people) {
        person.introduce(); // Call introduce() method for each person in the list
    }

    // Demonstrate asynchronous function
    const data = await fetchData(); // Wait for async function to resolve
    printOutput(`\n${data}\n`); // Print fetched data

    // Demonstrate exception handling
    try {
        const quotient = divide(10, 0); // Attempt division by zero
        printOutput(`Result of division: ${quotient}`); // Print result if no error
    } catch (error) {
        console.error("Caught an exception:", (error as Error).message); // Catch and print error message
    }
}

// Run the program
main(); // Execute main function