const {writeFileSync} = require('fs')

for (let i = 0; i < 10000; i++) {       
    for (let j = 0; j < 10000; j++) {
        writeFileSync("text.txt",`wow ${i}/${j}\n`,{flag:'a'})
    }   
}