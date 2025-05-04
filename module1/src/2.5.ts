
{

// {
//   // Reference Type --> Object

//   const user: {
//     readonly company: string; // type --> literal types
//     firstName: string;
//     middleName?: string; // optional type
//     lastName: string;
//     isMarried: boolean;
//   } = {
//     company: "Programming Hero",
//     firstName: "Mezbaul",
//     lastName: "Abedin",
//     isMarried: true,
//   };

//   user.company = "PH";
// }


// type PerformTask = (name: string, age: number, role?: string) => string;

// const performTaskFunction: PerformTask = (name, age, role = "student") => {
//   const message = `Hi ${name}. You are ${age} years old. You are ${role}`;
//   console.log(message);
//   return message;
// };

// performTaskFunction("Mezba", 20, "teacher");


// const reverString = (str: string): string => {
//   const reversedString = str.split("").reverse().join("");
//   console.log(reversedString);
//   return reversedString;
// };

// reverString("Hello World");

// const numbers = (...num: number[]): void => {
//   let sum = 0;
//   num.forEach((number: number) => {
//     sum += number;
//     console.log(sum)
//   });
//   console.log(sum)
// };

// numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// type assertion

const assertionFunc = (value: string | number): string => {
  if (typeof value === "string") {
    console.log(value.length);
    return `The string is ${value.length}`;
  } else if (typeof value === "number") {
    console.log(value * 2);
    return `The number is ${value * 2}`
  }
  else{
    return " Your Input is wrong"
  }
};
 assertionFunc("hellosdfsdfsdfsdf");

}