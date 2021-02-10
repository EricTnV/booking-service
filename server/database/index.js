/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const { Pool } = require('pg');
const redis = require('redis');

const psqlClient = new Pool({
  user: 'ubuntu',
  password: 'ubuntu',
  host: 'ec2-18-223-136-243.us-east-2.compute.amazonaws.com',
  dialect: 'postgres',
  database: 'postgres',
  port: 5432,
  max: 200,
});

psqlClient.connect();

const redisClient = redis.createClient({
  port: 6379,
  host: 'ec2-3-19-55-104.us-east-2.compute.amazonaws.com',
});

module.exports = { psqlClient, redisClient };
