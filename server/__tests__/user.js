// helps us do fetches in nodejs
const axios = require("axios");
describe("User Sign-Up", () => {
  // test stuff });
  test("This should return a user json object", async () => {
    const testUser1 = {
      name: "Valerie",
      lastName: "Reyes",
      email: "valerie@gmail.com",
      password: "1234",
    };

    await axios
      .post("http://localhost:5000/api/users/signup", testUser1)
      .then((response) => {
        console.log(response.data);
        const { name, lastName, email, password } = response.data;
        expect(response.status).toEqual(201);
        expect(name).toEqual(testUser1.name);
        expect(lastName).toEqual(testUser1.lastName);
        expect(email).toEqual(testUser1.email);
        expect(!!password).toEqual(true);
      });
  });
});
