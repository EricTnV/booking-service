/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const filePath = path.join(__dirname, 'CSV');
const ws = fs.createWriteStream(`${filePath}/properties.csv`);
ws.write('propertyid,price,cleaning,avg,totalrev\n', 'utf-8');
let price;
let cleaning;
let avg;
let totalRev;
let record;
for (let i = 1; i <= 10000000; i += 1) {
  price = faker.random.number({ min: 150, max: 250 });
  cleaning = Math.floor(faker.random.number({ min: 150, max: 250 }) * 0.12);
  avg = faker.random.float({ min: 3, max: 5 });
  totalRev = faker.random.number({ min: 50, max: 200 });
  record = `${i},${price},${cleaning},${avg},${totalRev}`;
  ws.write(`${record}\n`, 'utf-8');
  if (i % 100000 === 0) {
    console.log(`process: ${i / 100000}%`);
  }
}
ws.end();
