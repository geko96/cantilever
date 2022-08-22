
const express = require('express');
const app = express();
const args = require('minimist')(process.argv.slice(2));


const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

PORT = process.env.PORT || 8080
const log4js = require('log4js');

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

const logMidleware = (req, res, next) => {
    const log = log4js.getLogger('info');
    log.info({
        method: req.method,
        url: req.url,
        body: req.body,
        params: req.params,
        query: req.query,

    });

    // if error log error
    if (res.statusCode >= 400) {
        const log = log4js.getLogger('error');
        log.error({
            method: req.method,
            url: req.url,
            body: req.body,
            params: req.params,
            query: req.query,
            status: res.statusCode,
            message: res.message,
        });
    }
    
    
    next();
}

app.use(logMidleware);



app.get('/', (req,res) => {
    res.send('ok')
})

app.get('/info', (req,res) => {
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



const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
    
})