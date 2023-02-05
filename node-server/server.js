const express = require('express')
const session = require('express-session')
const cors = require('cors')
const app = express()

const port = '3001'

app.use(
  session({
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true
  })
)

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:5173',
      'http://test.com:5173',
      'http://127.0.0.1:5173'
    ]
  })
)

app.get('/', (req, res) => {
  console.log('session ID = %o', req.sessionID, req.session.id)
  if (req.session.count) {
    req.session.count++
  } else {
    req.session.count = 1
  }

  res.json({message: `visited ${req.session.count} time`})
})

app.listen(port, () => {
  console.log('listening on port ' + port)
})
