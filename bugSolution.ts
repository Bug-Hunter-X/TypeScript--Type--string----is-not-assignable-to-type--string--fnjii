function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Type Assertion
console.log(greeter(user.join(' ')));

// Solution 2: String type check
function greet(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}
console.log(greet(user));
console.log(greet("John"));