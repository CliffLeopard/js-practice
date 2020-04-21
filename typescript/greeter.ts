interface ClockInterface {
  tick(): void;
}
class DigitalClock implements ClockInterface {
  constructor(hour: number, minute: number) {

  }
  tick(): void {
    console.log("tick tock");
  }
}

class AnalogClock implements ClockInterface {
  constructor(hour: number, minute: number) {

  }
  tick(): void {
    console.log("beep beep");
  }
}
// 处理类的静态部分
interface ClockConstructor {
  new(hour: number, minute: number):ClockInterface;
}
function createClock(clock: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new clock(hour, minute);
}
// let digital: DigitalClock = new DigitalClock(12, 17);
// let analog: AnalogClock = new AnalogClock(15, 28);

let digital: DigitalClock = createClock(DigitalClock, 12, 17);
let analog: AnalogClock = createClock(AnalogClock, 15, 28);