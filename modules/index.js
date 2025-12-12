const path = require('path');
const fs = require('fs')
const EventEmitter = require("events")
const emitter = new EventEmitter

const os = require("os");



// 1-

// function filePath() {
//   console.log({
//     File: __filename,               
//     Dir: path.dirname(__filename)
//   });
// }
// filePath();


// 2-
// function getFileName(pth){

//     const fileName = path.basename(pth)
// return fileName
// }
// console.log(getFileName(__filename));

// 3-

// function buildPath(){
//     const fullPath = path.format({
//         dir : "modules",
//         name : "index",
//         ext : "js"
//     })
//     return fullPath
// }

// console.log(buildPath());

// 4- 

// function getExt(pth){
//     const Extenstion = path.extname(pth)
//     return Extenstion
// }
// console.log(getExt(__filename));


// 5- 

// function parsePath(pth) {
//     const parsedPath = path.parse(pth)
//     return parsedPath
// }
// console.log(parsePath(__filename));

// (note --> khalek faker en parse 3ks format) 

// 6

// function isAbsolute(pth) {
//     const check = path.isAbsolute(pth)
//     return check
// }

// console.log(isAbsolute(__filename));

// 7-
// const joinPath = (...pth)=> {
//     const fullPath = path.join(...pth)
//     return fullPath
// }

// console.log(joinPath("test" , "modules" , "index.js"));

// 8-
// const resolvePath = ()=>{
// const fullPath = path.resolve("index.js")
// console.log(fullPath);

// }
// resolvePath() // Bnaw3


// 9-
// const joinPath = (...pth) => {
//     const fullPath = path.join(...pth);
//     return fullPath;
// };

// console.log(joinPath("/folder1", "folder2/file.txt"));

// 10


// const deleteFile = (pth) => { 
// fs.unlink(pth , (err)=>{ 
//             if(err) throw err ;
//             console.log("file deleted successfully"); })
//         } 
// deleteFile("text.txt")

// 11
// const creatFile = (folderName) => {
//     fs.mkdirSync(folderName)
//     console.log("success");
// }
// creatFile("ayman")

// 12
// function logMessage(name){
//     emitter.on("start" ,(name)=>{
//         console.log(`Welcom ${name}`);
//     })
//     emitter.emit("start" , name )
// }

// logMessage("ayman")

// 13
// function login(username){
//     emitter.on("start" ,(name)=>{
//         console.log(`Welcom ${name}`);
//     })
//     emitter.emit("start" , username )
// }
// login("ahmed")

// 14
// function readFileSync(pth){
// const file =fs.readFileSync(pth , 'utf-8')
// console.log(file);

// }
// readFileSync("./text.txt")

// 15
// function writeFile(pth , content){
//     fs.writeFile(pth , content, (err) => {
//         if(err) throw err
//         console.log("file written successfully");
//     })
// }
// writeFile("text.txt" , "hi ayman")

// 16
// const checkExists = (path) => {
//     return fs.existsSync(path);
// };

// console.log(checkExists("text.txt"));

// 17
// const getOSInfo = () => {
//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     };
// };

// console.log(getOSInfo());