const http = require("http");


const data={
    name:"Guharoy",
    age:21

}
// create server
const server= http.createServer((req,res)=>{

    console.log("server created");
    res.setHeader("Content-Type","application/json");

    // res.setHeader("Content-Type","text/html");

    //https://www.seobility.net/en/wiki/Content_Type
    // Content type says what type of data is being sent in the response
    // res.end("Hello from the server");
    res.end(JSON.stringify(data))

})

// assign port 
server.listen(8081)
