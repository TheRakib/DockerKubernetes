const express = require('express')
const app = express()
const port = 8000

app.get('/posts', (req, res) => res.send('Hello World!'))

app.post("/posts", (req,res)=>{

    res.send("some post has posted")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))