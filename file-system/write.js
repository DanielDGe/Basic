const fs = require('fs');

//Codigo asincrono, no bloqueable.
fs.writeFile('./fileOne.txt', 'line one\nline two', error => {
  if(error) {
    console.log(error);
  }
  else {
    console.log('the file was created');
  }
});

console.log('last line of the program');