const express =require ('express')

const app = express()

const PORT=8080

app.get('/',(req,res)=>{
  res.send(<h1>99 bottles of beer on the wall</h1><a href=/${req.params.number}>LINK</a>)
})

app.get('/:number_of_bottles',(req,res)=>{
  res.send('There is ${req.params.numer_of_bottles} Bottles of beer on the wall </h1><a href=/${req.params.number}>LINK</a>')
})


app.get('/0',(req, res) => {
  res.send(<h1>Down to the ground </h1><a href='/'>Start Over</a>))


app.listen(PORT,()=>{
  console.log("Server listening on port: "+ PORT)
})