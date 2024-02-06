const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')
const mongoose = require("mongoose");

const http = require('http').createServer(app)

// session setup
const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
// Express App Config
app.use(express.json())
app.use(session)
app.use(express.static('public'))

// if (process.env.NODE_ENV === 'production') {
//     // Express serve static files on production environment
//     app.use(express.static(path.resolve(__dirname, 'public')))
// } else {
    // Configuring CORS
    const corsOptions = {
        // Make sure origin contains the url your frontend is running on
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080','http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
// }

app.use(cors());
app.options("*", cors());



mongoose
  .connect('mongodb+srv://sundos:313587032@cluster0.70p6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "neplixDb",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });


const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const mediaRoutes = require('./api/media/media.routes')


// routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/media', mediaRoutes)
// connectSockets(http, session)


// Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/toy/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue-router to take it from there
// app.get('/**', (req, res) => {
  //     res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // })
  
  const logger = require('./services/logger.service')
  const port = process.env.PORT || 3001 || 3030
  app.listen(port, () => {
    console.log("server is running http://localhost:3000");
  });