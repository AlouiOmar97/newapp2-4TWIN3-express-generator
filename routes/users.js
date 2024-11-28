var express = require('express');
var router = express.Router();
var validate = require('../middleware/validation')
/* GET users listing. */
router.get('/:nom/:email', function(req, res, next) {
  res.write('Hello ');
  //res.end()
  if(req.params.nom == 'Ali'){
   res.end('Bonjour Ali') 
  }else if(req.params.nom == 'Mohamed' && req.params.email == 'mohamed@gmail.com'){
    next()
  }else{
    next('route')
  }
},(req,res,next)=>{
  res.end('email : '+ req.params.email)
});

router.get('/:nom/:email',(req,res,next)=>{
  res.end('Hello '+ req.params.nom)
})

router.post('/create/:age',validate,(req,res,next)=>{
  const { nom, email } = req.body 
  console.log(req.body.nom);
  console.log(req.params.age)
  const { age } = req.params
  console.log(req.params);
  
res.json('User added ! nom : '+ nom + ' email : '+ email+ ' age : '+ age)
})

module.exports = router;
