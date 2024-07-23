const os = require('os')

// //info about current user
const user = os.userInfo()
//console.log(user);

// //system uptime
//console.log(`${os.uptime()/3600} hours`)

// //current os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMEM: os.totalmem(),
    freeMEM: os.freemem()
}
console.log(currentOS)