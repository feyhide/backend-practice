const {readFile, writeFile, write} = require('fs')

console.log("start")
readFile('../text/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('../text/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile("../text/third.txt",`${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }else{
                console.log(result)
            }
            console.log("ending")
        })
    })
})

console.log("starting with next one")