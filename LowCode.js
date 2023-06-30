//Req params
//Metodo all



app.get('/hello/:user',(req, res)=>{
    console.log(req.query)
   res.send(`Hello ${req.params.user.toUpperCase()}`)
})
app.get('/add/:x/:y',(req, res)=>{
   console.log(req.params.x)
   console.log(req.params.y)
   const result = parseInt(req.params.y) + parseInt(req.params.x);
   console.log(result)
   res.send(`Result:${result}`)
})
app.get('/search',(req, res)=>{
   if(req.query.q === 'javascript books'){
       res.send(`Se encontro ${req.query.q}`)
   }{
       res.send('Pagina no encontrada')
   }
})
app.get('/users/:username/photo',(req, res)=>{
   if(req.params.username === 'enzo'){
       return res.sendFile('./thor.png',{
           root: __dirname
       })
   }
   res.send('El usuario no tiene acceso')
})
app.get('/nombre/:name/edad/:age',(req, res)=>{
   console.log(req.params)
   res.send(`El nombre del usuario es ${req.params.name} y su edad es ${req.params.age} años `)
})
/*midelware autenticacion de query con el correo, todas las rutas por debajo deben pasar la autorizacion

app.use((req, res, next) => {
    console.log(`Esta solicitando la ruta: ${req.url} con el metodo: ${req.method}`)
    next()
})

app.use((req, res, next) => {
    if(req.query.login === 'enzolacuesta1996@gmail.com'){
        next()
    }else{
        res.send('No autorizado')
    }
})*/