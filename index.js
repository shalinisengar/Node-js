// console.log("welcome to my first code :)");
// REPL
// 1. JS Expression
// USE VARIABLE
// multi line code
//
// let fs = require('fs')
// console.log(fs);
// var a = 3
// console.log(4);

// let fs = require("fs")
//  1. *FileSystem modules in node is*

// const { log } = require("console")

// fs.writeFileSync("read.txt" , "welcocm to new file")
// fs.writeFileSync("read.txt" , "welcocm to new file read")
// fs.appendFileSync("read.txt" ,"hii! shalini")
// fs.readFileSync('read.txt')
// const buf_data= fs.readFileSync("read.txt")
// console.log(buf_data);
// org_data = buf_data.toString();
// console.log(org_data);
// fs.renameSync("read.txt" , "readwrite.txt")
// const buf_data= fs.readFileSync("readwrite.txt","utf8")
// console.log(buf_data);

//------------------------------------------------------------------------------

//  2.  *CRUD  oprations using filesystem moduls*

//  fs.mkdirSync('fs') folder create
//  fs.unlinkSync('readwrite.txt') file delete
//  fs.rmdirSync('fs') folder remove

// ----------------------------------------------------------------------------------
//  3.   Node.JS Asynchronous File System Core Modules

// fs.writeFile('read.txt' , 'today is very cold : )', (err )=>{
// console.log('file is created');
// console.log(err);
// })

// fs.appendFile('read.txt' , 'today is very cold day : )', (err )=>{
//     console.log('file is created');
//     console.log(err);
//     })
// fs.readFile('read.txt' , 'utf-8', (err , data )=>{
//     console.log(data);
//     console.log(err);
//     })

//--------------------------------------------------------------------------
//  4.  Synchronous vs Asynchronous Programming in NODE JS

// let data = fs.readFileSync('read.txt' , 'utf-8',)
//     console.log(data);
//     console.log('after the data');

// fs.readFile('read.txt' , 'utf-8', (err , data )=>{
// console.log(data);
// console.log(err);
// })
// console.log('after the data');

//-----------------------------------------------------------------------------
// 5.  Asynchronous CRUD Operations using File System Modules in NodeJS

// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder?

//------------------------------------------------------------------------------
//6.  Node.JS Oprating System Module To Get Operating System Info

// const os = require("os")
// console.log(os.arch());
// console.log(`${os.freemem()/1024/1024}`);
// console.log(`${os.totalmem()/1024/1024}`);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());

//---------------------------------------------------------------------------------
//  7. PATH Module In Node.JS

// let path = require('path')````````````````````````````````````````
// console.log(path.dirname('C:\Users\shali\node.js/index.js'));
// console.log(path.extname('C:\Users\shali\node.js/index.js'));
// console.log(path.basename('C:\Users\shali\node.js/index.js'));
// let mypath =path.parse('C:\Users\shali\node.js/index.js');
// console.log(mypath);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// 8.  How to CREATE and EXPORT Our Own Modules in Node JS
// let {add ,sub} = require("./importexport")
// console.log(add(2,4));
// console.log(sub(2,4));

// console.log(add);//

//  9. -----------------------------------------------------------------------------------------------------------------------------------------------------

// Complete NPM
// npm init
//chalk   atractive banane ke liye
// validator

// const chalk = require('chalk');
// // console.log(chalk.red.underline.inverse("false"));
// const validator = require('validator');
// let res = validator.isEmail('shalinisengar81@gmail.com')
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// 10. --------------------------------------------------------------------------------------------------------------------------------------------

// Module Wrapper Function in Node.JS

//11. --------------------------------------------------------------------------------------------------------------------------------------------------
// Creating Our Own Web Server in Node.JS | HTTP Module in Node JS

// const http = require('http');
// let fs = require('fs')
// const data =fs.readFileSync(`${__dirname}/api.json`,"utf-8");
// const obj = JSON.parse(data)
// const server = http.createServer((req ,res)=>{
// // res.end('hiiiiiiiiiiii')
// // console.log(req.url);
// if(req.url=='/'){
//     res.end('hello first page')
// }
// else if(req.url =='/about'){
//     res.end('this is a about page')
// }
// else if(req.url =='/contact'){
//     // res.write()
//     res.end('this is a contact page')
// }
// else if(req.url =='/api'){
//     // fs.readFile(`${__dirname}/api.json`,'utf-8', (err ,data)=>{
//     //     // console.log(data);
//     //     const objdata = JSON.parse(data);
//     //     res.end(data)
//     //     console.log(objdata);

//     // })
//     res.writeHead(200 , {"Content-type": "application/json"})
//     res.end(data)
//     console.log(obj);

// }
// else{
//     res.writeHead(404 , {"Content-type": "text/html"})
//     res.end('<h1> 404 error , page does not exist </h1>')
// }
// })

// server.listen( 8000, ()=>{
//     console.log('port no 8000');
// });

//=====-----------------------------------------------------------------------------------------------------------------------------------------
//  12.  Complete JSON in Node JS

// const fs = require('fs')
// const biodata = {
//     name : 'shalini',
//     age: 20 ,
//     channel : 'study engineering'
// };
// // console.log(biodata.name);
//  const jsondata = JSON.stringify(biodata)
//  console.log(jsondata);
//  const objdata = JSON.parse(jsondata)
//  console.log(objdata);
// //  fs.writeFile('json1.json' ,jsondata,(err)=>{
// //   console.log('done')
// //  }
// fs.readFile('json1.json','utf-8',(err, data)=>{
//     console.log(data);
//     const objdata = JSON.parse(data)
//     console.log(objdata);

// })

//-----------------------------------------------------------------------------------------------------------------------------------------
//  13 . Create Simple API In Node JS
// read  11.

//---------------------------------------------------------------------------------------------------------------------------------------------
//   14    Events Module in Node.JS

// const Events = require('events')
// const  events = new Events();

// events.on('checkpage', (sr , msg)=>{
//     console.log(sr ,msg);
// })
// events.on('sayMy_Name', ()=>{
//     console.log('ss');
// })
// events.on('sayMy_Name', ()=>{
//     console.log('sppps');
// })
// events.on('sayMy_Name', ()=>{
//     console.log('grsd');
// })
// events.on('sayMy_Name', ()=>{
//     console.log('hdf');
// })
// events.emit('sayMy_Name')
// events.emit('checkpage' , 200 , ok);

// ------------------------------------------------------------------------------------------------------------------------------------------

// 15 Streams and Buffer in Node JS with Example | Readable & Writable Streams in Node.JS

// Stream Pipes in Node

// const { create } = require('domain')
// const fs = require('fs')
// const http = require('http')
// const server  = http.createServer();
// server.on('request' , (req,res)=>{

// fs.readFile('read.txt' , (err,data)=>{
//     if(err)return console.log(err);
//    res.end(data.toString())
// })

// const rstream  = fs.createReadStream('read.txt')
// rstream.on('data',(datajjjj)=>{
//     res.write(datajjjj)
// })
// rstream.on('end',()=>{
//     res.end()
// })
// rstream.on('error',(err)=>{
//     console.log(err);
//     res.end('fill not found')

// })

// 3rs way

//      const rstream  = fs.createReadStream('read.txt')
// rstream.pipe(res)
// })

// server.listen( 5000, ()=>{
//     console.log('port no 8000');
// });

//  Send Emails with Nodemailer using Ethereal in Node.js

// const express = require('express')
// let app = express();

// const sendMail  = require('./controllers/sendMail')
// app.get('/', (req,res)=>{
//     res.send('hiiiiiiiiiiiiiiii')
// })

// app.get('/mail', sendMail);    // "sendemail" : Unknown word.
// const  start = async()=>{
//     try{
//         app.listen(5000,()=>{
//             console.log(' i am live in port no 5000000');
//         })
//     }
//     catch(error){}
// }

//------------------------------------------------------------------------------------------------------------------------------------------
//    Create Complete Dynamic Weather Website(App) using Real-Time API with HTML and Node.JS


// const http = require('http');
// let fs = require('fs')

// const server = http.createServer((req ,res)=>{
// // res.end('hiiiiiiiiiiii')
// // console.log(req.url);
// if(req.url=='/'){
//     res.end('hello first page')
// }
// else if(req.url =='/about'){
    
//         requests(
//           `https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=5a8bf94e983d5f88859995b7cbfafb72`
//         )
//           .on("data", (chunk) => {
//             const objdata = JSON.parse(chunk);
//             const arrData = [objdata];
//             console.log(arrData[0].main.temp);
//             const realTimeData = arrData
//               .map((val) => replaceVal(homeFile, val))
//               .join("");
//             res.write(realTimeData);
//             // console.log(realTimeData);
//           })
//           .on("end", (err) => {
//             if (err) return console.log("connection closed due to errors", err);
//             res.end();
//           });
//       } else {
//         res.end("File not found");
//       }
// }

   
// else{
   
//     res.end('<h1> 404 error , page does not exist </h1>')
// }

// )

// server.listen( 8000, ()=>{
//     console.log('port no 8000');
// });
// --------------------------------------------------------------------------------------------------------------


// let fs = require('fs')
// fs.writeFileSync('read.html', 'fhjhhhhhhhhhhhhhhhh')
// fs.writeFileSync('hi.txt','hiiiiiiiiiiiiiiiiii')

// console.log('hiiiiiiiiiiiiiiii');
// console.log(fs.readFileSync('hi.txt','utf-8'));

//--------------------------------------------------------------------------------------------------------------------
// express js







