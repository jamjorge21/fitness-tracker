const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
    useNewUrlParser: true,
    useFindAndModify: false
    }
);

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});