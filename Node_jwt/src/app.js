const express = require('express');

const SignupRouter = require('./routes/signup');
const bodyParser = require('body-parser')
const cors = require('cors');

const CrateAdminAccount = require('./scripts/admin');
const app = express();

const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());
CrateAdminAccount();

app.use('/user', SignupRouter);


app.listen(PORT, () => {   
     console.log(`Server is running on port ${PORT}`)})
