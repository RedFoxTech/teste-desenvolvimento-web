const fs = require("fs")

module.exports = {
    devServer: {
        https: true,
        public: "pkredfox.web.app",
        key: fs.readFileSync("./ssl/server.key"),
        cert: fs.readFileSync("./ssl/server.crt")
    }
}