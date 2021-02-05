const faker = require('faker');
const moment = require('moment');
const ObjectsToCsv = require('objects-to-csv');

// const db = require('./index');
// const Booking = require('../model/booking');
// const Property = require('../model/property');

// let primary = [];
// const primaryPromises = [];
let secondary = [];
const secondaryPromises = [];

for (let i = 0; i < 100; i += 1) {
  for (let j = 0; j < 50000; j += 1) {
    const propertyId = 30506101 + j + i * 50000;
    // primary.push({
    //   propertyId,
    //   price: faker.random.number({ min: 150, max: 250 }),
    //   cleaning: Math.floor(faker.random.number({ min: 150, max: 250 }) * 0.12),
    //   avg: faker.random.float({ min: 3, max: 5 }),
    //   totalRev: faker.random.number({ min: 50, max: 200 }),
    // });
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
  // const csv = new ObjectsToCsv(primary);
  // primaryPromises.push(csv.toDisk(`./seedFilesv2/primary${i}.csv`));
  // primary = [];
  const csv = new ObjectsToCsv(secondary);
  secondaryPromises.push(csv.toDisk(`./seedFiles/secondary${i}.csv`));
  secondary = [];
}

// Promise.all(primaryPromises)
//   .then(console.log('done'))
//   .catch((err) => console.log('error is', err));

Promise.all(secondaryPromises)
  .then(console.log('done'))
  .catch((err) => console.log('error is', err));

// const insertProperties = () => Property.create(primary);

// const insertBookings = () => Booking.create(secondary);

// Promise.all([insertProperties(), insertBookings()])
//   .then(() => {
//     db.close();
//   });
