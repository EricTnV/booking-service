const db = require('../database/index');
// const { Property } = require('../model');

const prop = (req, res) => {
  const { propertyId } = req.params;
  db.query(`SELECT * from property where propertyid=${propertyId}`)
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = prop;
