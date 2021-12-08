const express = require('express');
const connectDB = require('./config/db');
const app = express();


//connect Database
connectDB();



// init middleare
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'welcome to the contact keeper api' }));






//Define Routes
app.use('/api/users', require('./routes/user'));

app.use('/api/contacts', require('./routes/contacts'));

app.use('/api/auth', require('./routes/auth'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));