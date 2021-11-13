console.log(a);
var a = 10;
console.log(a);

setTimeout(() => {
  console.log("harish");
}, 1000);
setTimeout(() => {
  console.log("ram");
}, 0);
for (var i = 0; i <= a; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
