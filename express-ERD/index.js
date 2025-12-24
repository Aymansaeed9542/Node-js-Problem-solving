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

// add new user
app.post("/addUser" , (req,res) =>{
    const users = readFile()
    const newUser = req.body
    const checkUser = users.find(user => newUser.id == user.id)
    if (!checkUser) {
            let isExist = users.find(user => newUser.email == user.email)
    if (isExist) {
        res.json("Email aleady Exists")
    }
    users.push(newUser)
    res.json(newUser)
    writeFile(users)
    }
    res.json("User aleady Exists")
})
// Update user
app.patch("/updateUser/:id" ,(req,res) =>{
    const users = readFile()
    const {id} = req.params
    const updatedUser = req.body
    const checkUser = users.find(user => id == user.id)
    if (checkUser) {

        checkUser.name = updatedUser.name
        checkUser.email = updatedUser.email
        checkUser.age = updatedUser.age
        res.json(users)
        writeFile(users)
    }
    else{
        res.json("User is not found")
    }


})

// Delete user by id
app.delete("/deleteUser/:id" ,(req, res) =>{
    let users = readFile()
    const {id} = req.params
    const userIndex = users.findIndex(user => id == user.id)
    if (userIndex===-1) {
        return res.json("User is not found")
    }
    users.splice(userIndex,1)
        writeFile(users)
    res.json("User deleted successfully")
})

// get user by name 
app.get("/getUserByName" , (req, res)=>{
const {name} = req.query
const users = readFile()
const currentUser = users.find(user => name == user.name)
if (!currentUser) {
    return res.json("User name is not found")
}
res.json(currentUser)
})

// get all users
app.get("/getAllUsers" ,(req,res) =>{
    const users = readFile()
    res.json(users)
})

// filter users by minimum age
app.get("/getFilterByMinAge", (req , res) =>{
    const {minAge} = req.query
    const users = readFile()
    const FilterUsers = users.filter(user => minAge <= user.age)
    if (FilterUsers.length === 0) {
        return res.json("No user found")
    }
    res.json(FilterUsers)
})

// get user by id
app.get("/getUserById/:id" , (req , res) =>{
    const {id} = req.params
    const users = readFile()
    const isExist = users.find(user => id == user.id)
    if (!isExist) {
        return res.json("user is not found")
    }
    res.json(isExist)
})


app.listen(3000 , () =>{
    console.log("server is runnng in port 3000");
})

