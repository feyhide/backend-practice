const {readFileSync, writeFileSync} = require('fs')

console.log("start")

const first = readFileSync("../text/first.txt",'utf-8');
const second = readFileSync("../text/second.txt",'utf-8');
writeFileSync("../text/third.txt",`${first},${second}`,{flag:'a'});
//a for append

console.log(first,second)


console.log("ending")

console.log("starting with next one")