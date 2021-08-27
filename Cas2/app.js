let path = require('path');
let filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);


let util = require('util');
let text = 'Happy birthday!';
let result = util.format(text, 'Ivana', 32);

console.log(result);


let fs = require('fs');

fs.appendFile('myfile.txt', 'Hello Ivana!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});