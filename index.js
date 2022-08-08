const connectToMongo=require('./db')
const express = require('express')
connectToMongo();
const app = express()
const port = 3000



app.use(express.json())

// we can write available routes like this below
// rather than using all the routes at one place we will be creating a seperate folder for the same





// AVAILABLE ROUTES
app.use('/api/auth',require('./routes/auth'))
app.use('/api/userNotes',require('./routes/userNotes'))




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)})

