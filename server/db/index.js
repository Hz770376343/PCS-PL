const {Pool} = require('pg');


var env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const pool = new Pool({
  host: config.host,
  user: config.username,
  database: config.database,
  password: config.password,
  port: config.port,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
});
pool.query('select now()');

const colPool = new Pool({
  host: config.col.host,
  user: config.col.username,
  database: config.col.database,
  password: config.col.password,
  port: config.col.port,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
});
colPool.query('select now()');

module.exports = {
  pool,
  colPool
};
