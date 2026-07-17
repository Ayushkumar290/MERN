import fs from "fs/promises"

try {
    // 1. creating dir 
    // await fs.mkdir("f:\\nodejs\\text")
    // console.log("created")

    // 2. removing dir (it works when dir is empty already)
    // await fs.rmdir("f:\\nodejs\\text")
    // console.log("removed")
    
    // 3. Creating file 
    // await fs.writeFile("RED.txt", "I'm red, Nice to meet you ")
    // console.log("created")
    // 4. append the file contant
    // await fs.appendFile("RED.txt", "I'm red, What's your name ")
    // console.log("changed")

    //5 read the file
    // const data = await fs.readFile("RED.txt" , "utf-8")
    // console.log(data )
    //6. copy file
    // await fs.copyFile("Red.txt","info.text")
    // console.log("copy successfull")

    // 7. get the stats of the file
    const stats = await fs.stat("Red.txt")
    console.log(stats)
    console.log(stats.birthtime)

} catch (error) {
    console.log(error);
}