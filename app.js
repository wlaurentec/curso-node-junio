const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request made to server");
  console.log(req.url);
  console.log(req.method);
  res.end("Hello World");
});

const port = 3000;

server.listen(port,() => console.log(`Server has started on port http://localhost:${port}`));

