/* A kérés (URL routing) alapján vagy regisztrációs vagy belépési oldalt ad vissza */

const express = require('express');
const path = require('path'); // lehetővé teszi a könyvtárak betöltését
const app = express();
const port = 3000;
const cors = require('cors');
const fs = require('fs'); // lehetővé teszi a képek betöltését

// Statikus fájlok kiszolgálása (pl. képek, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // statikus fájlok betöltését

app.use(cors({ origin: `http://localhost:3000` }));

app.get('/', (req, res) => {
    // index.html visszaküldése
    console.log(__dirname);
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(200).sendFile(path.join(__dirname, '/public/index.html')); // '200' for a successful GET request
});

app.get('/register', (req, res) => {
    // register.html visszaküldése
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(200).sendFile(path.join(__dirname, '/public/register.html')); // '200' status code for successful requests
});

app.get('/login', (req, res) => {
    // login.html visszaküldése
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(200).sendFile(path.join(__dirname, '/public/login.html')); // '200' for successful request
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
