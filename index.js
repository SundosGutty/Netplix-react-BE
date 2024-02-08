const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const expressSession = require('express-session');
const mongoose = require('mongoose');

const http = require('http').createServer(app);

// Session setup
const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});

// Express app config
app.use(express.json());
app.use(session);
app.use(express.static('public'));
app.use(cors({
  origin: ['http://localhost:3000','https://main--curious-caramel-25f854.netlify.app', ['*']], // Allow requests from this origin
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://sundos:313587032@cluster0.70p6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'neplixDb'
})
.then(() => {
    console.log('Database Connection is ready...');
})
.catch((err) => {
    console.error('Database Connection Error:', err);
});

// Import routes
const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');
const mediaRoutes = require('./api/media/media.routes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/media', mediaRoutes);

// Start the server
const port = process.env.PORT || 3001;
http.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
