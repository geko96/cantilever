require('dotenv').config();
const parseArgs = require('minimist');
const { fork, exec } = require('child_process');
const log4js = require('log4js');

const args = parseArgs(process.argv.slice(2));

const express = require('express');
const session = require('express-session');
const app = express();
const db = require('./Components/Database/db');
const userModel = require('./Components/Models/User');


const jwt = require('jsonwebtoken');

const SECRET = 'secret';

log4js.configure({
    appenders: {
        consola: { type: 'console'},
        warning: { type: 'file', filename: './logs/warn.log'},
        error: { type: 'file', filename: './logs/error.log'},
        info: { type: 'file', filename: './logs/info.log'},
    },
    categories: {
        default: { appenders: ['consola', 'warning', 'error'], level: 'debug' },
        info: { appenders: ['info','consola'], level: 'info' },
        error: { appenders: ['error'], level: 'error' },
        warning: { appenders: ['warning'], level: 'warn' },
    }
})

const warn = log4js.getLogger('warning');
const error = log4js.getLogger('error');
const info = log4js.getLogger('info');




console.log(args);

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,

}))


const PORT = args.p || 8080

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


app.get('/', (req,res) => {
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,
        
    }));
    return res.send('ok')
})

app.post('/api/checkuser', (req,res) => {
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,
        
    }));
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
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,
        
    }));
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
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,
        
    }));
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
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,
        
    }));
    if(req.session.user) return res.json(req.session.user)
    
    return res.send('not logged')
})

app.get('/info', (req,res) => {
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,
    }));
    let data = {
        "Argumentos": args,
        "Sistema operativo": process.platform,
        "Versión de Node": process.version,
        "Memoria total reservada": process.memoryUsage().heapTotal,
        "Path de ejecucion": process.execPath,
        "Process id": process.pid,
        "Carpeda del proyecto": __dirname,
    }
    res.json(data)
})

app.get('/api/random', (req,res) => {
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,

    }));
    let resultado = fork('./forks.js')
    resultado.on('message', (data) => {
        res.json({'Resultado' : data})
    })
})


app.get('/not-found', (req,res) => {
    info.info(JSON.stringify({
        user: req.session.user,
        token: req.session.token,
        "url": req.url,
        "method": req.method,
        
    }));
    warn.warn('url Not found')
    res.status(404).send('Not found')

})




const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
    
}).on('error', err => {
    error.error(err)
})


fork('./apiFork.js', {env: {PORT: PORT+1}})




///Funciones



