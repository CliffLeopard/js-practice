var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.age = age;
        this.name = name;
    }
    Animal.say = function () {
        console.log("Animal static method say()");
    };
    Animal.prototype.print = function () {
        console.log("The Aninal,name:", this.name, "Age:", this.age);
    };
    Animal.hello = "Hello Static Params";
    return Animal;
}());
var dog = new Animal("Pick", 13);
dog.print();
console.log(Animal.hello);
Animal.say();
