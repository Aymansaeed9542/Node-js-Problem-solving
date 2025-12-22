// part 1 
const fs = require('fs');

// 1-
// const readableStream = fs.createReadStream('./big.txt',
//     { encoding: 'utf-8' ,
//         highWaterMark:64 
//     }
// );
// readableStream.on('data', (chunk) => {
//     console.log('New chunk received:');
//     console.log(chunk);
// });

// readableStream.on('end', () => {
//     console.log('Finished reading file.');
// });

// readableStream.on('error', (err) => {
//     console.error('Error:', err);
// });

// 2-

// const readableStream = fs.createReadStream('./big.txt', { encoding: 'utf-8' });

// const writableStream = fs.createWriteStream('./dest.txt');

// readableStream.pipe(writableStream);

// writableStream.on('finish', () => {
//     console.log('File copied using streams!');
// });

// readableStream.on('error', (err) => {
//     console.error('Error reading source file:', err);
// });

// writableStream.on('error', (err) => {
//     console.error('Error writing to destination file:', err);
// });

// 3-
// const zlib = require('zlib');

// const readableStream = fs.createReadStream('./big.txt');
// const writableStream = fs.createWriteStream('./big.txt.gz');
// const gzip = zlib.createGzip();

// readableStream.pipe(gzip).pipe(writableStream);

// writableStream.on('finish', () => {
//     console.log('File compressed and saved as data.txt.gz');
// });

// readableStream.on('error', (err) =>
//     console.error('Read error:', err));
// writableStream.on('error', (err) =>
//     console.error('Write error:', err));
// gzip.on('error', (err) => 
//     console.error('Compression error:', err));




// part 2
// const http = require("http");
// const server = http.createServer((req, res) => {
//     let { url, method } = req;
//     res.setHeader("Content-Type", "application/json");

//     // 1. Get all users
//     if (url == "/getAllUsers" && method == "GET") {
//         let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//         res.write(JSON.stringify(users))
//         res.end();
//     }

//     // 2. Add new user
//     else if (url == "/addUser" && method == "POST") {
//         let body;
//         req.on("data", (chunk) => body = JSON.parse(chunk));
//         req.on("end", () => {
//             let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//             let isExist = users.find(u => u.email == body.email);
//             if (isExist) {
//                 res.write(JSON.stringify({ message: "Email already exists." }))
//                 res.end();
//             } else {
//                 body.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
//                 users.push(body);
//                 fs.writeFileSync("users.json", JSON.stringify(users));
//                 res.write(JSON.stringify({ message: "User added successfully." }))
//                 res.end();
//             }
//         });
//     }

    // 3. Update User (ID in Body)
    // else if (url == "/updateUser" && method == "PATCH") {
    //     let body;
    //     req.on("data", (chunk) => body = JSON.parse(chunk));
    //     req.on("end", () => {
    //         let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    //         let user = users.find(u => u.id == body.id);
    //         if (user) {
    //             user.name = body.name;
    //             user.email = body.email;
    //             user.age = body.age;
    //             fs.writeFileSync("users.json", JSON.stringify(users));
    //             res.write(JSON.stringify({ message: "User age updated successfully." }))
    //             res.end();
    //         } else {
    //             res.write(JSON.stringify({ message: "User ID not found." }))
    //             res.end();
    //         }
    //     });
    // }

    // 4. Delete User (ID in Body)
//     else if (url == "/deleteUser" && method == "DELETE") {
//         let body;
//         req.on("data", (chunk) => body = JSON.parse(chunk));
//         req.on("end", () => {
//             let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//             let index = users.findIndex(u => u.id == body.id);
//             if (index != -1) {
//                 users.splice(index, 1);
//                 fs.writeFileSync("users.json", JSON.stringify(users));
//                 res.write(JSON.stringify({ message: "User deleted successfully." }))
//                 res.end();
//             } else {
//                 res.write(JSON.stringify({ message: "User ID not found." }))
//                 res.end();
//             }
//         });
//     }

//     // 5. Get User By ID (ID in Body)
//     else if (url == "/getUserById" && method == "GET") {
//         let body;
//         req.on("data", (chunk) => body = JSON.parse(chunk));
//         req.on("end", () => {
//             let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
//             let user = users.find(u => u.id == body.id);
//             if (user) {
//                 res.write(JSON.stringify(user))                
//                 res.end();
//             } else {
//                 res.write(JSON.stringify({ message: "User not found." }))
//                 res.end();
//             }
//         });
//     }
// });

// server.listen(3000, () => console.log("Server running on port 3000"));

// part 3

/*

1- Node.js Event Loop

Monitors Call Stack and Event Queue to execute async callbacks.

Allows Node to be non-blocking despite being single-threaded.

2- Libuv

C library managing Event Loop, Thread Pool, and async I/O.

Enables Node to run async tasks cross-platform.

3- Async Operations

Node offloads async tasks to Libuv (kernel or thread pool).

When done → callback goes to Event Queue → Event Loop executes it.

4- Call Stack vs Event Queue vs Event Loop

Call Stack: currently running functions.

Event Queue: callbacks ready to run.

Event Loop: picks callbacks when stack is empty.

5- Thread Pool

JS is single-threaded, but expensive tasks run in thread pool (default 4 threads).

Change size with UV_THREADPOOL_SIZE.

6- Blocking vs Non-Blocking

Blocking: stops everything until task finishes (e.g., fs.readFileSync).

Non-blocking: Node continues, callback runs when task finishes (e.g., fs.readFile).
*/