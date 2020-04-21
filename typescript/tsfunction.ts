
// 声明的同时初始化
let myAdd = (a: number, b: number): number => a + b;

// 先声明后初始化的方式
let myAdd1: (a: number, b: number) => number;
myAdd1 = function (a: number, b: number): number {
  return a + b;
}

console.log(myAdd(11, 23))
console.log(myAdd1(10, 44))

// 可选参数和默认参数

let buildName = (firstName: string, lastName: string): string => firstName + "." + lastName
console.log("正常函数:");
console.log(buildName("cliff", "leopard"))

let buildName2 = (firstName: string, lastName?: string): string => lastName ? (firstName + "." + lastName) : firstName;
console.log("可选参数:");
console.log(buildName2("cliff", "leopard"));
console.log(buildName2("cliff"));

let buildName3 = (firstName: string, lastName = "leopard"): string => lastName ? (firstName + "." + lastName) : firstName;
console.log("默认参数:");
console.log(buildName3("cliff", "Dragon"));
console.log(buildName3("cliff"));


console.log("剩余参数:");
function buildName4(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)