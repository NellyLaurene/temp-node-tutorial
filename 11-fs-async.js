// IT DOES'NT WAIT FOR THE BIG TASK TO FINISH FIRST

const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Hello this is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting the next task');


