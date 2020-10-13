const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  let vehicleId = parseInt(req.params.vehicleId);
  let vehicle = vehicles.find((vehicle) => vehicle._id === vehicleId);

  res.send(vehicle);
};

const create = (req, res) => {
  let vehicle = req.body;
  vehicle._id = vehicles.length + 1;

  vehicles.push(vehicle);

  res.send(vehicles);
};

module.exports = { list, show, create };
