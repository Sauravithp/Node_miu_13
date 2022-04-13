const bookRoute=require('./route/BookRoute')
const express = require("express");

const app=express();

app.set('port', process.env.PORT||3000);
const port=app.get('port');
console.log("*****"+port+"*****")

//URL ENCODING
app.use(express.json());

app.use("/book",bookRoute);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({error: err.message});
    } else {
        res.status(500).json({error: 'Something is wrong! Try later'});
    }
});


app.listen(port,()=>{console.log("listening to port "+port)});

