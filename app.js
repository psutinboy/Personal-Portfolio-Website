const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const projectsRouter = require('./routes/routeProjects');

// Use routes
app.use('/projects', projectsRouter);

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Personal Website',
        // Add any other data you want to pass to the template
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
