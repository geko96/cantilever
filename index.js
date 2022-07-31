

const express = require('express');
const session = require('express-session');
const app = express();
const db = require('./Components/Database/db');
const userModel = require('./Components/Models/User');

const jwt = require('jsonwebtoken');

const SECRET = 'secret';


const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,

}))


const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


app.get('/', (req,res) => {
    return res.send('ok')
})

app.post('/api/checkuser', (req,res) => {
    const { username, password } = req.body
    db.then(db => {
        userModel.findOne({username: username, password: password}, (err,user) => {
            if(err) return res.send(err)
            if(!user) return res.send('user not found')
            return res.send(user)
        })
    }).catch(err => console.log(err))

})

app.post('/api/register', (req,res) => {
    const { name, password, mail, cuit, } = req.body
    
    const user = {
        name,
        password,
        mail,
        cuit,
        role: 'AdminUser'
    }

    

    db.then(db => {
        userModel.create(user, (err,user) => {
            if(err) return res.status(400).send(err)
            return res.send(user)
        })
    }).catch(err => console.log(err))

})

app.post('/api/login', (req,res) => {
    const { mail, password } = req.body
    db.then(db => {
        userModel.findOne({mail: mail, password: password}, (err,user) => {
            if(err) return res.send(err)
            if(!user) return res.send('user not found')

            const token = jwt.sign({user}, SECRET, { expiresIn: '24h' })

            

            let session = {
                id: user._id,
                name: user.name,
                mail: user.mail,
                cuit: user.cuit,
                role: user.role,
                token: token

            }

            
            
            return res.send(session)
        })
    }).catch(err => console.log(err))
})

app.post('/api/checkLogin', (req,res) => {
    if(req.session.user) return res.json(req.session.user)
    
    return res.send('not logged')
})




const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})





///Funciones



