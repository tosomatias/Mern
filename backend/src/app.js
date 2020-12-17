const express = require("express");
const app = express();
const cors = require('cors');


//setting configuraciones del servidor
app.set('port',process.env.PORT || 4000)


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));



module.exports= app;