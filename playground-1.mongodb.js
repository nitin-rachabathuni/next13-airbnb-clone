/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("myNewDB");

// Insert a few documents into the sales collection.
db.getCollection("Listing").insertMany([
  {
    id: "1",
    title: "Cozy Beachfront Cottage",
    description:
      "This charming cottage is located right on the beach, with stunning views of the ocean. It's the perfect place to relax and unwind.",
    imageSrc:
      "https://images.unsplash.com/photo-1581579862400-6b683c3c429a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    createdAt: "2023-08-04T12:00:00.000Z",
    category: "House",
    roomCount: 2,
    bathroomCount: 1,
    guestCount: 4,
    locationValue: "123 Main Street, Malibu, CA",
    userId: "USER_ID_1",
    price: 200,
  },
  {
    id: "2",
    title: "Luxurious Mountain Cabin",
    description:
      "This spacious cabin is located in the heart of the mountains, and it's the perfect place to escape the hustle and bustle of city life.",
    imageSrc:
      "https://images.unsplash.com/photo-1563628225138-1cb9f0e422e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    createdAt: "2023-08-04T12:00:00.000Z",
    category: "Cabin",
    roomCount: 3,
    bathroomCount: 2,
    guestCount: 6,
    locationValue: "456 Elm Street, Aspen, CO",
    userId: "USER_ID_2",
    price: 300,
  },
  {
    id: "3",
    title: "Modern City Loft",
    description:
      "This stylish loft is located in the heart of the city, and it's the perfect place to stay for a weekend getaway.",
    imageSrc:
      "https://images.unsplash.com/photo-1507828549014-fe93a860137c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    createdAt: "2023-08-04T12:00:00.000Z",
    category: "Loft",
    roomCount: 1,
    bathroomCount: 1,
    guestCount: 2,
    locationValue: "789 Oak Street, San Francisco, CA",
    userId: "USER_ID_3",
    price: 150,
  },
]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
