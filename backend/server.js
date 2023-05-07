const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./Data/data.js');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middleware/errormiddleware.js');


const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data in the body

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});