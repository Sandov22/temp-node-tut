const { log } = require("console")
const os = require("os")
//info about current user
const user = os.userInfo()

//System uptime
//console.log( `Time: ${os.uptime()}` );

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);