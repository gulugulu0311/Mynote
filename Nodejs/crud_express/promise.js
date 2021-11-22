const fs = require("fs");

new Promise((res, rej) => {
  fs.readFile('./test/a.txt',(err, data) => {
      if(err){
          rej(err)
      }
      return new Promise((res, rej) => {

      })
  })
});