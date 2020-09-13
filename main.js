console.log('main')

const app = require('./src/app');
require('dotenv/config') 

const port = process.env.PORT || 5000;

// impoting db conection instance

const db = require('./src/apis/database/databaseConection')

db.then(()=>{
  app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
  })


