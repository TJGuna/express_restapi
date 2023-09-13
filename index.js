const express = require('express')
const cors = require("cors");
const app = express()

const corsOptions = {
    // origin:'https://abc.onrender.com',
    AccessControlAllowOrigin: '*',
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}
app.use(cors(corsOptions));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
