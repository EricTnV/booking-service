const faker = require('faker');
const moment = require('moment');
const ObjectsToCsv = require('objects-to-csv');

let secondary = [];
const secondaryPromises = [];

for (let i = 0; i < 100; i += 1) {
  for (let j = 0; j < 50000; j += 1) {
    const propertyId = 30506101 + j + i * 50000;
    secondary.push({
      propertyId,
      date: {
        start: moment(faker.date.between('01-30-2021', '02-10-2021')).format('MM-DD-YYYY'),
        end: moment(faker.date.between('02-12-2021', '02-16-2021')).format('MM-DD-YYYY'),
      },
    });
    secondary.push({
      propertyId,
      date: {
        start: moment(faker.date.between('02-20-2021', '03-05-2021')).format('MM-DD-YYYY'),
        end: moment(faker.date.between('03-08-2021', '03-12-2021')).format('MM-DD-YYYY'),
      },
    });
  }
  const csv = new ObjectsToCsv(secondary);
  secondaryPromises.push(csv.toDisk(`./seedFiles/secondary${i}.csv`));
  secondary = [];
}

Promise.all(secondaryPromises)
  .then(console.log('done'))
  .catch((err) => console.log('error is', err));
