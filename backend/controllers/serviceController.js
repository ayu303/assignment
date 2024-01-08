const Service = require('../models/Service');

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const createService = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newService = new Service({ name, description });
    await newService.save();
    res.json(newService);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllServices,
  createService,
  // Add more controller functions as needed
};
