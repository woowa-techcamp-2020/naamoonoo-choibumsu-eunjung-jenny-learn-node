const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [a, b] = line.split(" ");

  const getReversed = (num) => num.split("").map((v) => +v);

  const reversedA = getReversed(a);
  const reversedB = getReversed(b);

  const res = [];
  let left = 0;

  while (reversedA.length !== 0 && reversedB.length !== 0) {
    const numA = reversedA.pop();
    const numB = reversedB.pop();

    const tmp = numA + numB + left;
    res.push(tmp % 10);
    left = parseInt(tmp / 10);
  }

  const longNum = reversedA.length === 0 ? reversedB : reversedA;

  while (longNum.length !== 0) {
    const num = longNum.pop();

    const tmp = num + left;
    res.push(tmp % 10);
    left = parseInt(tmp / 10);
  }

  if (left !== 0) res.push(left);

  console.log(res.reverse().join(""));

  rl.close();
}).on("close", function () {
  process.exit();
});
