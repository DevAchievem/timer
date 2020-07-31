const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  
  if (key.name === 'b') {
    process.stdout.write('beep' + "\n");
  } else if (key.ctrl && key.name === 'c') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key.name >= 1 || key.name <= 9) {
    console.log("setting timer for " + key.name + " seconds");
    let when  = (key.name * 1000);
    setTimeout(() => {
      process.stdout.write('beep!' + "\n");
    }, when);
  }
});
