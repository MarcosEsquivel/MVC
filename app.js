const express = require('express');
const app = express();
const main = require('./routers/main');
const about = require('./routers/main');
const port = 3000


app.use(express.static('Public'))

app.use('/', main);

app.use('/about', about);

app.listen(port, () => {
    console.log('Servidor funcionando en http://localhost:' + port);
})