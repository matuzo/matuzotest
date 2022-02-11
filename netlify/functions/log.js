exports.handler = async function (event, context) {
  const fs = require('fs')
  const queryString = require('query-string');
  
  fs.writeFile('/idlog.txt', event.queryStringParameters.q, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World" }),
    };
  }