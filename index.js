

const express = require('express');
const app = express();
const db = require('./Components/Database/db');
const userModel = require('./Components/Models/User');



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
    const { username, password, mail, cuit, } = req.body
    
    const user = {
        username,
        password,
        mail,
        cuit,
        role: 'user'
    }

    db.then(db => {
        userModel.create(user, (err,user) => {
            if(err) return res.send(err)
            return res.send(user)
        })
    }).catch(err => console.log(err))

})




const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})





///Funciones

function CreateToken (user) {
    const payload = {
        subject: user._id,
        username: user.username,
        role: user.role
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options)
}

