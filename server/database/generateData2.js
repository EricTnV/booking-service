/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const faker = require('faker');
const moment = require('moment');

const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/bookings.csv`);
ws.write('bookingid,propertyid,date\n', 'utf-8');
let record;
let start;
let end;
for (let i = 0; i < 2; i += 1) {
  for (let j = 1; j <= 10000000; j += 1) {
    start = moment(faker.date.between('01-30-2021', '02-10-2021')).format('MM-DD-YYYY');
    end = moment(faker.date.between('02-12-2021', '02-16-2021')).format('MM-DD-YYYY');
    record = `${j + 10000000 * i},${j},"{ "start" : "${start}" , "end" : "${end}" }"`;
    ws.write(`${record}\n`, 'utf-8');
    if (j % 200000 === 0) {
      console.log(`process: ${((j + (10000000 * i)) / 200000)}%`);
    }
  }
}
ws.end();
