// require('dotenv').config();
const http = require("http");

const fs = require("fs");
// var requests = require("requests");


// const homeFile = fs.readFileSync("home.html", "utf-8");


// const replaceVal = (tempVal, orgVal) => {
//   let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
//   temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
//   temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
//   temperature = temperature.replace("{%location%}", orgVal.name);
//   temperature = temperature.replace("{%country%}", orgVal.sys.country);
//   temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
// console.log(temperature);
//   return temperature;
// };

const server = http.createServer((req, res) => {
  if (req.url == "/") {
   res.end('sssssssssssssss')
  }
  else if(req.url== '/weather'){
    requests(
      `https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=5a8bf94e983d5f88859995b7cbfafb72`
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(arrData[0].main.temp);
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    res.end("File not found");
  }
  }
)

server.listen(3000, ()=>{
  res.end('hhhhhhhhhhhhhhhhhh')
});