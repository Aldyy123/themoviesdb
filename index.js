const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.end("Hello World!");
    fs.readFile("./src/main.html", null, (err, data) => {
      if (err) {
        res.writeHead(404);
        respone.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(8080);
