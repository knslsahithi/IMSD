// Demonstration of TypeScript Class, Constructor, Properties, Methods & Access Specifiers 
class Person { 
// Properties with access specifiers 
public name: string; 
private age: number; 
protected city: string; 
// Constructor to initialize properties 
constructor(name: string, age: number, city: string) { 
this.name = name; 
this.age = age; 
this.city = city; 
} 
// Public method 
public displayInfo(): void { 
console.log(`Name: ${this.name}`); 
console.log(`City: ${this.city}`); 
// Accessing private member inside class 
console.log(`Age: ${this.age}`); 
} 
// Private method (only accessible within this class) 
private secretMessage(): string { 
return "This is a private message!"; 
} 
// Public method calling private method 
public revealSecret(): void { 
console.log(this.secretMessage()); 
} 
} 
// Subclass demonstrating 'protected' access 
class Employee extends Person { 
private employeeId: number; 
constructor(name: string, age: number, city: string, employeeId: number) { 
super(name, age, city); 
this.employeeId = employeeId; 
} 
// Method using protected property 
public showEmployeeDetails(): void { 
console.log(`Employee ID: ${this.employeeId}`); 
console.log(`${this.name} works in ${this.city}`); 
} 
} 
// Object creation 
const person1 = new Person("Knsls", 25, "Hyderabad"); 
person1.displayInfo(); 
person1.revealSecret(); 
const emp1 = new Employee("John", 30, "Bangalore", 101); 
emp1.displayInfo(); 
emp1.showEmployeeDetails(); 
// person1.secretMessage(); 