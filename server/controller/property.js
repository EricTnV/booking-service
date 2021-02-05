const db = require('../database/index');
// const { Property } = require('../model');

const prop = (req, res) => {
  const { propertyId } = req.params;
  // Property.findOne({ propertyId })
  db.query(`SELECT * from property where propertyid=${propertyId}`)
    .then((data) => {
      console.log(data[0][0]);
      res.send(data[0][0]);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = prop;
