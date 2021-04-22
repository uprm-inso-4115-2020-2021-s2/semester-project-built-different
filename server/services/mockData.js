async function getapi() {
  // Store response
  const response = await fetch(
    "https://my.api.mockaroo.com/rum2_go_customer.json?key=535f7d80",
  );

  // Store data in form of JSON
  var data = await response.json();

  //Do something with data
  return data;
}

module.exports = getapi;
