const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morganBody = require('morgan-body');
const config = require('./config/database.config');
var cors = require('cors')
const app = express();

app.use(cors())
morganBody(app);
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const { User } = require('./models/user'); 
const { auth} = require('./middleware/auth')

app.use(bodyParser.json());
app.use(cookieParser());

// GET //
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname
    })
});


app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})



app.get('/api/users',auth,(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})


app.post('/api/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:'Auth failed, email not found'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Wrong password'
            });

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                console.log("token after login>>>>>",user.token)
                res.cookie('auth',user.token).json({
                    token:user.token,
                    isAuth:true,
                    id:user._id,
                    email:user.email
                })
            })
        })
    })
})


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING on ${port}`)
})