const {readFile, writeFile} = require("fs") 
console.log("Start");
readFile("./folder/first.txt", "utf8" , (err, result)=>{
    if(err){
        return
    }
    const first = result
    readFile("./folder/first.txt", "utf8" , (err, result)=>{
        if(err){
            return
        }
        const second = result
        writeFile(
            "./folder/result-async.txt",
            `Here is the result: ${first}, ${second}`,
            (err, result)=> {
                if(err){
                    return
                }
                console.log("done");
            }
        )
    })
})
console.log("Starting next task");