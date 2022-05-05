const http = require("http");
const hostname = "127.0.0.1";
const port = 1337;

const text = "<h1>test</h1>";

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(text);
});

server.listen(port,hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`)
})