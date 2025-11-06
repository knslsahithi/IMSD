// Simple Types
let name: string = "Sahithi";
let age: number = 20;
let isStudent: boolean = true;

// Special Types
let unknownValue: unknown = "Hello TypeScript!";
let anyValue: any = 100;
let noValue: null = null;
let notDefined: undefined = undefined;
let nothing: void = function (): void {
  console.log("This function returns nothing (void).");
};

// Displaying values
console.log("=== Simple Types ===");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

console.log("\n=== Special Types ===");
console.log("Unknown Value:", unknownValue);
console.log("Any Value:", anyValue);
console.log("Null Value:", noValue);
console.log("Undefined Value:", notDefined);
nothing();
