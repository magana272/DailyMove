var http = require('http');
var fs = require('fs');
const Quote = require('inspirational-quotes');


const PORT=8080;


function GenerateMessage(){
    console.log(Quote.getQuote());
    console.log("hello")
    return Quote.getQuote();
  }

fs.readFile('./home.html', function (err, html) {
    if (err) throw err;
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});

