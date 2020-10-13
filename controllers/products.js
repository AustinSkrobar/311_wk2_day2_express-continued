const products = require("../data/products");

const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  let productId = parseInt(req.params.productId);
  let product = products.find((product) => product._id === productId);

  res.send(product);
};

const create = (req, res) => {
  let product = req.body;
  product._id = products.length + 1;

  products.push(product);

  res.send(products);
};

module.exports = { list, show, create };
