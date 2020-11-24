
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const app = express()
app.use(cors())
const api = require('./routes/api')
app.use(bodyParser.json())
app.use('/api',api)
app.use('/api/category',(req,res,next)=>{
     const categories=[
{
  
  categoryName:"FirstServerPOst",
  categoryCode:"G100"
},
{
  
  categoryName:"SecondServerPOst",
  categoryCode:"B500"
}
     ];
     res.status(200).json({
       message:'Post Success',
       categories: categories
     })

})
app.get('/',function(req,res){
  res.send('Hello From Sever  ')
})
app.listen(port,function(){
  console.log('server running on localhost:'+port)
})
