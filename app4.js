const {readFileSync, writeFileSync} = require("fs")
console.log("Start");
const first = readFileSync("./folder/first.txt", "utf8")
const second = readFileSync("./folder/second.txt", "utf8")

writeFileSync(
    "./folder/result-sync.txt",
    `Here is the result: ${first}, ${second}`,
    {flag: "a"}
)
console.log("done");
console.log("Starting next task");