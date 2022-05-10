const Mysql = require('mysql');

const mysqlConnection=Mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'logindb',
    port:'3306'
});

mysqlConnection.connect(err=>{
    if(err){
        console.log('Error en db: ', err);
        return;
    }else{
        console.log('Db ok');
    }
});

module.exports=mysqlConnection;