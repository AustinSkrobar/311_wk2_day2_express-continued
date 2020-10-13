const express = require("express");
const bodyParser = require("body-parser");

const products = require("./routes/products")
const comments = require("./routes/comments")
const contacts = require("./routes/contacts")
const vehicles = require("./routes/vehicles")

const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/comments', comments)
app.use('/contacts', contacts)
app.use('/products', products)
app.use('/vehicles', vehicles)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});











