const express = require('express');

const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public/'));

app.get('/', (request, response) => {

    // response.send('<h1>Hello World</h1>');

    response.send({
        name: 'Arghya',
        likes: ['movies',
            'cricket',
            'football'
        ]
    })
});

app.get('/about', (req, res) => {
    // res.send('About Page!');
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});