const express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname));

app.get("/", function (request, response) {
    response.send("hello!");
});

// Shhh, quiet - this bit is the listener, which logs out to the console when its ears are open ;)

app.listen(PORT, () => console.log(`Avenu Industries App is now listening on ${PORT}`));