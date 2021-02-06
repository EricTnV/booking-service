const { Pool } = require('pg');

const client = new Pool({
  user: 'ubuntu',
  password: 'ubuntu',
  host: 'ec2-3-16-89-205.us-east-2.compute.amazonaws.com',
  dialect: 'postgres',
  database: 'postgres',
  port: 5432,
  max: 200,
});

client.connect();

module.exports = client;
