// helps us do fetches in nodejs
const axios = require('axios');
// for establishing a connection with our db
const initializeDB = require('../services/db');

describe('Meal Tests', () => {
  test('This should return the meal json object', async () => {
    // using a sample test meal for the POST request
    const testMeal = {
      name: 'Pechuga Milanesa',
      price: 6.99,
      comments: 'No incluye bebida',
      available: true,
      sid: 1,
    };

    // make a POST request to add a new meal to the db
    await axios.post('http://localhost:5000/api/meals/add', testMeal).then(async (response) => {
      // establish a connection pool with the postgres intance
      const pool = initializeDB();

      // get the status code from the response
      const { status } = response.data;

      // query string for searching for the created meal and later disposing
      let queryString = 'FROM Meal WHERE';

      // get arrays of keys & values
      const selectors = Object.keys(testMeal);
      const values = Object.values(testMeal);

      // append to query string the fields we'll be using for the meal search
      selectors.forEach((field, i) => {
        queryString += `\t${field}=$${i + 1}\t`;
        if (i < selectors.length - 1) queryString += '\tAND\t';
      });

      // query in the db for the meal
      await pool.query(`SELECT * ${queryString}`, values, async (err, r) => {
        // verify if an error is defined
        expect(err).toBeUndefined();
        // check if the reponse is a 200 (OK)
        expect(response.status).toEqual(200);
        // if rows is null that means the meal wasn't found
        expect(r.rows).not.toBeNull();
        // delete the meal
        await pool.query(`DELETE ${queryString}`, values, (err, r) => {
          expect(err).toBeUndefined();
          expect(response.status).toEqual(200);
        });
        // end the connection with the db
        pool.end();
      });
    });
  });

  //only works if there are meals in the system
  test('This should return every meal json object in the database', async () =>{
      await axios.post("http://localhost:5000/api/meals/get").then( async (response) =>{
          // establish a connection pool with the postgres intance
          const pool = initializeDB();

          // get the status code from the response
          const { status } = response.data;

          // query in the db for all meals
          await pool.query(`SELECT * FROM Meal`, async (err, r) => {
            // verify if an error is defined
            expect(err).toBeUndefined();
            // check if the reponse is a 200 (OK)
            expect(response.status).toEqual(200);
            // if rows is null that means the meal wasn't found
            expect(r.rows).not.toBeNull();
            // expect the result to be the same as the response
            expect(r).toEqual(response);
            // end the connection with the db
            pool.end();
          });
      });
  });
});