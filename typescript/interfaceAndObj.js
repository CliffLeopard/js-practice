function getCounter() {
    var counter = function (start) {
        return start.toString();
    };
    counter.interval = 10;
    counter.reset = function () { return console.log("counter's reset"); };
    return counter;
}
var counter = getCounter();
console.log(counter(14));
console.log(counter.interval);
counter.reset();
