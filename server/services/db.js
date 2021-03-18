const Pool = require("pq").Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "rum2go:1.0-db",
  host: "localhost" || process.env.PORT,
  port: 5432,
});

module.exports = pool;

// This is a placeholder database
// var db = {
//   users: [],
// };
//
// const addDocument = (collectionName, value) => {
//   db[collectionName].push(value);
//   return value;
// };
//
// const findById = (collectionName, id) => {
//   return db[collectionName].filter((doc) => doc._id === id)[0];
// };
//
// const find = (collectionName, filter) => {
//   if (!filter) return db[collectionName];
//   const fields = Object.keys(filter);
//   const result = [];
//
//   for (let j = 0; j < db[collectionName].length; j += 1) {
//     let mismatch = false;
//     for (let i = 0; i < fields.length; i += 1) {
//       if (db[collectionName][j][fields[i]] !== filter[fields[i]]) {
//         mismatch = true;
//         break;
//       }
//     }
//     if (mismatch) break;
//     result.push(db[collectionName][j]);
//   }
//
//   return result;
// };
//
// module.exports = {
//   findById,
//   addDocument,
//   find,
// };
