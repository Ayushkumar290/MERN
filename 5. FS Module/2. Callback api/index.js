import fs from "fs"

// using callback function 
fs.rmdir("f:\\king" , function(error) {
    if(error) throw error;
    console.log("removed")
})