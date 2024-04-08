const express=require('express')

const students=require('./data/students')
const studentRoute = require('./routes/studentRoutes');

console.log(students)
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.get('/api/students', (req, res) => {
    res.json(students);
});

app.use('/api/student', studentRoute);

app.listen(process.env.PORT,console.log("serverconnected"))