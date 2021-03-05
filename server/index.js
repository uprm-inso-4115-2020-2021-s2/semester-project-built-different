// ES5 Syntax
const express = require('express')
const userRoutes  = require('./routes/user')
const bodyparser = require('body-parser')
const app = express()
const port = 3000

// allow passing JSON and form data in request body.
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json({ limit: '50mb' }));

// route that handles all incoming user-related requests.
app.use('/api/user',userRoutes)

// server is initialized and listening to incoming requests.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
