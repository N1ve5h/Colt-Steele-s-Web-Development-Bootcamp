const fs = require("fs");
const folderName = process.argv[2] || "Project"; //Only checks first argument made by user, if not auto names to Project.

// fs.mkdir('Dogs',{recursive: true}, (err) =>{
//     if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/main.scss`, "");
  fs.writeFileSync(`${folderName}/script.js`, "");
} catch (e) {
    console.log("Error!");
    console.log(e);
}
