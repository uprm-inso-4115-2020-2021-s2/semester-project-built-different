describe("User Sign-Up", () => { // test stuff });
    test("this should return a user json object", async() => {
        const testUser1 = {
            name: "Valerie",
            lastname: "Reyes",
            email: "valerie@gmail.com",
            password: "1234"
        }
        const res = await fetch("http://localhost:5000/api/usesr/signup", {
            method: "POST",
            body: JSON.stringify()
        })
        const data = await res.json()
        expect(data).toEqual(testUser1)

    })
});