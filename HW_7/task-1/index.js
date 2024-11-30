function collectorFunc() {
  let collector = 0;
  function collect_more(arg) {
    collector += arg;
    return collector;
  }
  return collect_more;
}
const sum = collectorFunc();

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(6));
console.log(sum(7));
console.log(sum(8));
console.log(sum(9));
console.log(sum(10));
