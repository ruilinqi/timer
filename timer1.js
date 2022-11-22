const args = process.argv.slice(2);
console.log(args);

const countTimer = (args) => {
  for (let time of args) {
    let number = Number(time);
    console.log(number);
    setTimeout(() => {
      process.stdout.write(`${number} seconds...`)}, number * 1000)  
      // process.stdout.write('\x07');
  }
}
countTimer(args);