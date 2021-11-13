console.log(a);
var a = 10;

setTimeout(() => {
  console.log("harris");
}, 1000);

for (let j = 0; j <= a; j++) {
  setTimeout(() => {
    console.log(j);
  }, 10);
}
