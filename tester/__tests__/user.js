// helps us do fetches in nodejs
const axios = require('axios');
// for establishing a connection with our db
const initializeDB = require('../services/db');

describe('Order POST', () => {
  test('This should return the order object json object', async () => {
    // using a sample test order for the POST request
    const testOrder = {
      order_date: '2021-02-10',
      status: 'pending',
      comment: 'no onions',
      order_total: 23.99,
      c_id: 1,
    };

    // make a POST request to add a new user to the db
    await axios.post('http://localhost:5000/api/orders/add', testOrder).then(async (response) => {
      // establish a connection pool with the postgres intance
      const pool = initializeDB();

      // get the status code from the response
      const { status } = response.data;

      // query string for searching for the created order and later disposing
      let queryString = 'FROM Order_Details WHERE';

      // get arrays of keys & values
      const selectors = Object.keys(testOrder);
      const values = Object.values(testOrder);

      // append to query string the fields we'll be using for the order search
      selectors.forEach((field, i) => {
        queryString += `\t${field}=$${i + 1}\t`;
        if (i < selectors.length - 1) queryString += '\tAND\t';
      });

      // query in the db for the order
      await pool.query(`SELECT * ${queryString}`, values, async (err, r) => {
        // verify if an error is defined
        expect(err).toBeUndefined();
        // check if the reponse is a 200 (OK)
        expect(response.status).toEqual(200);
        // if rows is null that means the order wasn't found
        expect(r.rows).not.toBeNull();
        // delete the order
        await pool.query(`DELETE ${queryString}`, values, (err, r) => {
          expect(err).toBeUndefined();
          expect(response.status).toEqual(200);
        });
        // end the connection with the db
        pool.end();
      });
    });
  });
});
