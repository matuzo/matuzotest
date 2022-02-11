exports.handler = async function (event, context) {
  const fs = require('fs')

  let params = (new URL(document.location)).searchParams;
  let q = params.get('q'); // is the string "Jonathan Smith".

  fs.writeFile('./idlog.txt', q, err => {
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