const get_api_url =  
      "https://my.api.mockaroo.com/rum2_go_customer.json?key=535f7d80"; 


async function getapi(url) { 
    
    // Store response 
    const response = await fetch(url); 
    
    // Store data in form of JSON 
    var data = await response.json(); 

    //Do something with data
    console.log(data); 
} 

getapi(get_api_url);