const { psqlClient, redisClient } = require('../database/index');
// const { Property } = require('../model');

const prop = (req, res) => {
  const { propertyId } = req.params;
  redisClient.get(propertyId, (error, result) => {
    if (error) {
      throw error;
    } else if (result) {
      res.send(result);
    } else {
      psqlClient.query(`SELECT * from property where propertyid=${propertyId}`)
        .then((data) => {
          res.send(data.rows[0]);

          redisClient.set(propertyId, JSON.stringify(data.rows[0]));
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  });
};

module.exports = prop;
