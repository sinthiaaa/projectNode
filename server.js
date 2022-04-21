const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req , res )=>{

//loadash
const num = _.random(0,20);
console.log(num);


   //console.log(req.url , req.method);


//set header content type
   res.setHeader('Content-Type' , 'text/html');

   let path = './views/';
   switch(req.url){
        case '/':
          path += 'index.ejs';
          res.statusCode= 200;
           break;
        case '/about':
          path += 'about.ejs';
          res.statusCode= 200;
           break;
        case '/about_bla':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        case '/create':
            path += 'create.ejs';
            res.statusCode = 200;
            break;
        default :
          path += '404.ejs';
          res.statusCode = 404;
          break;

   }


// send an html file
   fs.readFile(path,(err,data)=>{
    
    
    
    if(err){

        console.log(err);
        res.end();
    }else{
     res.write(data);
     res.end();



    }

   })



   

});
server.listen(3000, 'localhost',() =>{

  console.log('listening for request on port 3000')


});