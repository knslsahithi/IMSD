// Demonstrating Arrow Functions with Optional, Default, and Rest Parameters 
// Arrow function with optional parameter 
const greet = (name?: string): string => { 
return `Hello ${name ?? "Guest"}!`; 
}; 
// Arrow function with default parameter 
const multiply = (a: number, b: number = 2): number => { 
return a * b; 
}; 
// Arrow function using rest parameters 
const sumAll = (...numbers: number[]): number => { 
return numbers.reduce((total, num) => total + num, 0); 
}; 
// Displaying outputs 
console.log("=== Arrow Function Demonstration ==="); 
console.log(greet("Sahithi"));      // With argument 
console.log(greet());              
 // Without argument (optional) 
console.log("Multiply (5,3):", multiply(5, 3)); 
console.log("Multiply (7):", multiply(7)); // Uses default b=2 
console.log("Sum of all (10,20,30,40):", sumAll(10, 20, 30, 40));