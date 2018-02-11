const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


var TBapiKey = "45942552";
var TBsessionId = "2_MX40NTk0MjU1Mn5-MTUxODI2NTc2OTY4NX5WRVdlRGF1NWxYRzBRdHl5WlVZRkp1K2p-fg";
var TBtoken = "T1==cGFydG5lcl9pZD00NTk0MjU1MiZzaWc9ZmQ0NGU4NjI4ZTAyZWU0ZmIwM2IxOGJhYjViYWU5ZmUyNGZiMjQyNTpzZXNzaW9uX2lkPTJfTVg0ME5UazBNalUxTW41LU1UVXhPREkyTlRjMk9UWTROWDVXUlZkbFJHRjFOV3hZUnpCUmRIbDVXbFZaUmtwMUsycC1mZyZjcmVhdGVfdGltZT0xNTE4MjY1ODAyJm5vbmNlPTAuNjUyNTY3OTU2OTg0MTE4NyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTE4MzUyMjA2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";


// app.get('/', (req, res) => {
// res.sendFile(__dirname + '/index.html');
// });
  app.use(express.static('./'));
// app.get('/', function(req,res) {
//   res.sendFile(__dirname + '/index.html');
// })


//io.on('connection', function(socket){console.log('now connected');})

io.on('connection',async function(socket){

      console.log('now connected');
})

  app.get('/test', function (req,res) {

          io.emit('go',TBapiKey,TBsessionId,TBtoken);
          res.send('working!');
  });

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}


http.listen(3000, () => {
  console.log('Server is up on port 3000');
});
