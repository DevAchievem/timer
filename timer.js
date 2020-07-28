const { number } = require("yargs");

let input = process.argv.slice(2);
for (let num of input) {
  let when = (num * 1000);

  if (!num) {
    return;
  }
	
  if (isNaN(num)) {
    continue;
  }

  if (num < 0) {
    continue;
  }
  console.log("this should iterate through the numbers:", num);
  setTimeout(() => {
    process.stdout.write('.');

  }, when);
}

