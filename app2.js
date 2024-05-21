const names = require("./names")
const sayHi = require("./utils")
console.log(names)

const data = require("./alternative")
console.log(data)

require("./mindGrenade")

sayHi("Kenobi")
sayHi(names.john)
sayHi(names.anakin)