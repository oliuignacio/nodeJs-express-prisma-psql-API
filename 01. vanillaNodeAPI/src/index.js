const http = require('http');

const server = http.createServer( (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode=201;
    res.end()
  }
})







const rootURL = "http://localhost:"
const PORT = "3001"

server.listen(PORT, ()=>{
  console.log(`Server running on ${rootURL + PORT}`);
})