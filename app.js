const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

var books = require('./routes/books'); 
var routes = require('./routes');
var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/books', books.list);
app.get('/books/add', books.add);
app.post('/books/add', books.save);
app.get('/books/delete/:id', books.delete);
app.get('/books/edit/:bookid', books.edit);
app.post('/books/edit/:bookid', books.update);

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
