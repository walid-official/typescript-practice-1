// {
//   // Basic Data Type

//   //string
//   let firstName: string = "mezba";
//   //number
//   let roll: number = 123;
//   //boolean
//   let isAdmin: boolean = true;
//   // undefined
//   let x: undefined = undefined;
//   // null
//   let y: null = null;

//   let d: number;

//   d = 123;

//   // Array

//   let friends: string[] = ["rachel", "monica"];

//   let eligibleRollList: number[] = [1, 3];

//   eligibleRollList.push("dd");

//   // tuple --> array --> order --> type of values

//   let coordinates: [number, number] = [1, 5];

//   let ageName: [number, string, boolean] = [50, "Mr.X", true];

//   ageName[0] = 67;
// }
const str: string = "Hello";
const num: number = 10;
const isTrue: boolean = true;
const isNull: null = null;
const isUndefined: undefined = undefined;
const isSymbol: symbol = Symbol("symbol");
const isBigInt: bigint = BigInt(10);

const arr: string[] = ["a", "b", "c"];
const obj: { a: string; b: number } = { a: "a", b: 1 };
const func: () => void = () => {};