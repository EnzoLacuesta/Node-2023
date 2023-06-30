const express = require('express')
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))



app.get('/profile', (req, res)=>{
    res.send('Profile Page')
})

app.get('/dashboard', (req, res)=>{
    res.send('Dashboard page')
})

app.use('/public',express.static('./public'))

app.all('/', (req, res) => {
    res.send('Hola pepe')
})

app.listen(3000)
console.log(`Server listen on por ${3000}`)