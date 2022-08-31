const fs = require("fs");
//to make a folder
const folderName = process.argv[2] ||  "Project";
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,"odun")
    fs.writeFileSync(`${folderName}/styles.css`, "odun")
    fs.writeFileSync(`${folderName}/apps.js`, "odun")
}catch(e){
    console.log("SOMETHING WENT WRONG!!");
    console.log(e.error);
    console.log(e.message);
    
}



//the asynchronous version
// fs.mkdir("Dogs",{recursive:true},(err)=>{
//     console.log("i come inside the callback")
//     if(err) throw err
// });
// console.log("I COME AFTER mkgir in the file ")