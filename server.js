const restify = require('restify');

const server = restify.createServer();

server.get('/', (req, res, next) => {
    res.send('Servidor rodando com sucesso');
    return next();
});

server.listen(8081, ()=>{
    console.log('Servidor de pé em: http://localhost:8081');
    console.log('Para derrubar o servidor digite: crtl+c');
});
