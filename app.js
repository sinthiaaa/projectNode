const express = require('express');
const morgan = require('morgan');
const req = require('express/lib/request');

//express app
const app = express();

//register view engine
app.set('view engine','ejs');



//listen for requires
app.listen(3000);



//middleware & static files
app.use(express.static('public'));



app.use(morgan('dev'));





app.get('/',(req, res) =>{

   const blogs =[

      {title:'asjhfgoih', snippet:'hbhhjffjoijhoijhidgihj'},
      {title:'fjsjgpsjgpsjkp', snippet:'asdfghjkl'},
      {title:'sdgjjkkm,g,', snippet:'erogkgof'},

   ];




  res.render('index',{blogs});
 
 
  //res.send('<p>Home Page </p>');

});

app.get('/about',(req, res) =>{
    res.render('about');
    //res.send('<p>Home Page </p>');
   
   });

app.get('/create',(req,res)=>{

   res.render('create');

});

app.use((req,res)=>{

  res.status(404).render('404');

});