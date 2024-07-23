const path = require('path')
console.log(path.sep)

const filepath = path.join("..",'/text','first.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'..','text','first.txt')
console.log(absolute)