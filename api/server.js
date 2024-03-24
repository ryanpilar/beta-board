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
// pp.use(express.static(path.join(__dirname, 'public')) )


// ------------------------ Routes ----------------------- //
// app.use('/', require('./routes/index'))


app.get('/', (req, res) => {
    res.send('Bbbbetaaaa Boarrrrrrd!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
