require('dotenv').config()
const express = require ('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const UserRouter = require('./routes/userRouter')
const NewRouter = require('./routes/newRouter')
const errorHandler = require('./middleware/errorHandler')


app.get('/', (req, res)=> res.send('grup project'))
app.use('/user', UserRouter)
app.use('/news', NewRouter)

app.use(errorHandler)

app.listen(port, ()=> console.log(`listening on port ${port}`))