const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
app.use(cors())

var redis = require("redis"),
client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);


app.get('/jobs', async(req, res) => {

    const jobs = await getAsync('github')
    res.send(jobs)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))