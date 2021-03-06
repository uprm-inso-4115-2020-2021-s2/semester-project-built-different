// helps us do fetches in nodejs
const axios = require("axios");
describe("User Sign-Up", () => {
  // test stuff });
  test("This should return a user json object", async () => {
    const testUser1 = {
      name: "Valerie",
      lastname: "Reyes",
      email: "valerie@gmail.com",
      password: "1234",
    };

    await axios
      .post("http://localhost:5000/api/user/signup", testUser1)
      .then((response) => {
        expect(response.data).toEqual(testUser1);
      });
  });
});
