const { server } = require('./routes')
//const { readXLSX } = require('./utils')
//const path = require('path');

//const _path = path.join(__dirname, 'xlsx', 'PokemonGo.xlsx');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
//readXLSX(_path);