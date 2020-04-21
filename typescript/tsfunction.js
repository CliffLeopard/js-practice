// 声明的同时初始化
var myAdd = function (a, b) { return a + b; };
// 先声明后初始化的方式
var myAdd1;
myAdd1 = function (a, b) {
    return a + b;
};
console.log(myAdd(11, 23));
console.log(myAdd1(10, 44));
// 可选参数和默认参数
var buildName = function (firstName, lastName) { return firstName + "." + lastName; };
console.log("正常函数:");
console.log(buildName("cliff", "leopard"));
var buildName2 = function (firstName, lastName) { return lastName ? (firstName + "." + lastName) : firstName; };
console.log("可选参数:");
console.log(buildName2("cliff", "leopard"));
console.log(buildName2("cliff"));
var buildName3 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "leopard"; }
    return lastName ? (firstName + "." + lastName) : firstName;
};
console.log("默认参数:");
console.log(buildName3("cliff", "Dragon"));
console.log(buildName3("cliff"));
console.log("剩余参数");
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
