// IT WAIT FOR THE BIG TASK TO FINISH FIRST

const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync('./content/third.txt', 
`Hello this is the result: ${first}, ${second}`, {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');