class Animal{
  static hello = "Hello Static Params"
  static say():void{
    console.log("Animal static method say()")
  }
  protected name:string;
  constructor(name:string,private age:number){
    this.name = name
  }
  print():void{
    console.log("The Aninal,name:",this.name,"Age:",this.age)
  }
}

let dog = new Animal("Pick",13)
dog.print()
console.log(Animal.hello)
Animal.say()
