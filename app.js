const express = require('express');
const path = require('path');
const multer  = require('multer');
const upload = multer({});

// set the port of application
const port = process.env.PORT || 3000;

// Creating server
const app = express();

/*************************************** 
Routing Functions
***************************************/
// Index route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Upload POST route
app.post('/upload', upload.single('myFile'), function(req, res) {
    // If no file uploaded, or error with upload, returns error page.
    if (req.file === undefined) {
        res.sendFile(path.join(__dirname + '/public/uploaderror.html'));
    // Otherwise, returns size to user in an object
    } else {
        sizeObj = {
            'size': req.file.size + ' ' + 'bytes'
        };
    
        res.send(sizeObj);
    }
});

/*************************************** 
Start Server
***************************************/
// Listening on port
app.listen(port);