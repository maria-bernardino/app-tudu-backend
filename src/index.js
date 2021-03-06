require('dotenv').config();
const express = require('express');
const app = express();
const routerUser = require('./routes/user');
const routerTask = require('./routes/task');
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json())

app.use(routerUser);
app.use(routerTask);

app.listen(port, () =>{
    console.log(`Server is Runnig at http://localhost:8000/`);
});