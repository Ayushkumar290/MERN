import * as fs from "fs"

//sync is very important without this it will do not work

fs.mkdirSync("c:\\nodjs\\courses\\test" ,{recursive:true})