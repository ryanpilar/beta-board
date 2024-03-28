const cors = require('cors');
const path = require('path')
const express = require('express');
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/mongo')
const port = 3000;

dotenv.config();

connectDB()

const app = express();

app.use(cors({ origin: true }));

// --------------- BODY PARSER MIDDLEWARE ---------------- //
app.use(express.urlencoded( {extended: false}))
app.use(express.json());

// ----------------- LOGGING MIDDLEWARE ------------------ //
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// -------------------- Static Assets --------------------npm run dev
// app.use(express.static(path.join(__dirname, 'public')) )


// ------------------------ Routes ----------------------- //


app.get('/section', (req, res) => {
    const part1 = 'Hello ';
    const part2 = 'SECTION YO!';
    const result = part1 + part2;

    setTimeout(() => {
        res.send(result);
    }, 5000); 
});

app.get('/setter-setup', (req, res) => {
    const part1 = 'Hello setter ';
    const part2 = 'you are awesome!';   
    const result = part1 + part2;       

    setTimeout(() => {  
        res.send(result);  
    }, 2000);
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});