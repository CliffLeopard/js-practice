interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter: Counter = <Counter>function (start: number): string {
    return start.toString();
  }
  counter.interval = 10
  counter.reset = () => console.log("counter's reset")
  return counter;
}

let counter: Counter = getCounter();
console.log(counter(14));
console.log(counter.interval)
counter.reset()