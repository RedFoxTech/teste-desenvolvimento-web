const express = require ('express');
const app = express();
const passport = require('passport') //iria utilizar para fazer autenticações
const mongoose = require('mongoose');
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDb"))
    .catch(err => console.log(err))



app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

app.get("/", (req, res) => {
   /* const user = new User ({
        handle: "Ryan",
        email: "impcomercial.87@gmail.com",
        password: "1234"
    })
    user.save()*/
    res.send("Ryan Here")
})
app.use("/api/users",users)
app.use("/api/tweets", tweets)

const port = process.env.PORT || 4000

app.listen(port, () => {console.log(`Listening on port ${port}`)});
