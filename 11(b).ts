// Function with parameter and return types in TypeScript 
// Function that takes two numbers and returns their sum 
function addNumbers(a: number, b: number): number { 
return a + b; 
} 
// Function that takes a string and returns a greeting message 
function greetUser(name: string): string { 
return `Hello, ${name}! Welcome to TypeScript Functions.`; 
} 
// Function that takes no parameters and returns void 
function showMessage(): void { 
console.log("This function returns nothing (void)."); 
} 
// Calling the functions 
console.log("=== Function Parameter and Return Types ==="); 
console.log("Sum of 10 and 20:", addNumbers(10, 20)); 
console.log(greetUser("Sahithi")); 
showMessage();