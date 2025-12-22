const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.json())

function readFile(){
    const file = fs.readFileSync("./users.json" ,{
        encoding : "utf-8"
    })
    return JSON.parse(file)
}

function writeFile(data){
    const file = fs.writeFileSync("./users.json",JSON.stringify(data),'utf-8')
}


app.post("/addUser" , (req,res) =>{
    const users = readFile()
    const newUser = req.body
    let isExist = users.find(user => newUser.email == user.email)
    if (isExist) {
        res.json("Email aleady Exists")
    }
    users.push(newUser)
    res.json(newUser)
    writeFile(users)
})

app.listen(3000 , () =>{
    console.log("server is runnng in port 3000");
})
