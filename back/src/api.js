const express = require('express')
const cors = require('cors')
const { setupRoutes } = require('./routes')

class Api {
	constructor() {
		this.app = express()
		this.app.use(cors())
		setupRoutes(this.app)
	}

	run(port) {
		this.app.listen(port, () => {
			console.log(`Api running on port ${port}!`)
		})
	}
}

module.exports = Api
