//asyncExample

//3
// const { readFile, writeFile } = require("fs");
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const { readFile, writeFile } = require("fs").promises;


//2
// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

//1
// getText('text/first.txt')
//     .then((result) => console.log(result))
//     .catch((err)=>console.log(err))

const start = async() => {
    try {
        //2
        // const first = await getText("text/first.txt")
        // const second = await getText("text/second.txt")
        
        //3
        // const first = await readFilePromise("text/first.txt",'utf-8')
        // const second = await readFilePromise("text/second.txt",'utf-8')
        // await writeFilePromise('text/third.txt',`${first} \n ${second}`)

        const first = await readFile("text/first.txt",'utf-8')
        const second = await readFile("text/second.txt",'utf-8')
        await writeFile('text/third.txt',`${first} \n ${second}`)


        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()