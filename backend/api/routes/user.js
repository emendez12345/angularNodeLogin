const express=require('express');
const jwt  = require('jsonwebtoken');
const router=express.Router();

const mysqlConnection=require('../connection/connection');

//const jwt= require('jwt');

router.get('/',(req,res)=>{
     mysqlConnection.query('select * from users',(err,rows,fields)=>{
        if (!err) {
            res.json(rows);
        } else{
            console.log(err);
        }
     })
});
router.post('/register',(req,res)=>{
   // req.mysqlConnection((err,conne)=>{
    //    if(err) return res.send(err)
      //  console.log(req.body);
       mysqlConnection.query('INSERT INTO users set ?', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send('Register User');
      //  })
    })
});
router.post('/singin',(req,res)=>{
    //console.log(req.body);
    const {username,pass}=req.body;
    mysqlConnection.query('select username,role from users where username=? and pass=?',
    [username,pass],
    (err,rows,fileds)=>{
        if (!err) {
           // console.log(rows);
           if (rows.length>0) {
               let data=JSON.stringify(rows[0]);
               const token=jwt.sign(data, 'stil');
               res.json({token});
           }else{
              // console.log(err);
           res.json('Usuario o clave incorrectos');
           }
        }else{
         console.log(err);  
        }
    }
    )
})

router.post('/test', verifyToken,(req,res)=>{
    res.json('Informacion secreta'); 
})

function verifyToken(req,res,next) {
    if(!req.headers.authorization) return res.status(401).json('No autorizado');

   const token=req.headers.authorization.substr(7);
  // console.log(token)
  if (token!=='') {
      const content = jwt.verify(token,'stil');
      req.data=content;
      next();    
  }else{
      res.status(401).json('Token Vacio');
  }
}

module.exports=router;