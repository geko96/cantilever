
const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

PORT = 7070



app.get('/api/randoms', (req,res) => {
    let numero = req.query.cant

    if (!numero) {
        return numero = 100000000
    }

    let randomArray = []
    let randomNumber = () => {

        for(let i = 0; i < numero; i++) {
            
            for(let i = 0; i < numero; i++) {
                randomArray.push(Math.floor(Math.random() * 1000))
            }
            
        }

        return randomArray
    }
    

    return res.json(randomNumber())
})



const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
    
})