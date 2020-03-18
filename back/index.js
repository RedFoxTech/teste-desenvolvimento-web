const Api = require('./src/api')

new Api().run(process.env.PORT || 5000)
