const path = require('path');
const multer = require('multer');

const multerConfig = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', '..', 'uploads'),
    filename: function(_, file, callback){
        callback(null, file.originalname);
    }
  })
}

module.exports = { multerConfig };