var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
<<<<<<< HEAD
        res.end('Hello vikky, How are you?');
=======
        res.end('Hello vikky, Where are you?');
>>>>>>> 4th commit
}).listen(8080);
console.log('Server started on localhost:8080; press Ctrl-C to terminate...!');
