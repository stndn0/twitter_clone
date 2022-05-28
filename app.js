const express = require('express');
const app = express();
const PORT = 3000;
const exphbs = require('express-handlebars');

// Routing
const router = require('./routes/router')
const postRouter = require('./routes/postRouter')       // TODO
app.use('/', router)

// Handlebars configuration
app.engine('hbs', exphbs.engine({
    defaultlayout: 'main',
    extname: 'hbs'
}))

// Set view engine to handlebars
app.set('view engine', 'hbs')

// Server 
app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running.")
})