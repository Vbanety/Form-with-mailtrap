const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static('public'));

const port = 8080;



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})