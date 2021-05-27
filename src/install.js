const fs = require('fs-extra')

// Async with promises:
fs.copy('./src/lang-uk_m', '../@nlpjs/lang-uk_m')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))