const path = require('path');
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



