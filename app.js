const fs = require('fs');
const os = require('os');
const user = os.userInfo();
const date =new Date();
let message=`this file created by ${user.username} at ${date}.`

fs.appendFile("info.txt",message,(err)=>{console.log(err)});