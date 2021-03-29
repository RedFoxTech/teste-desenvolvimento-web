const path = require('path');
const multer = require('multer');

const multerConfig = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', '..', '..', 'uploads'),
    filename: function(req, file, callback){
      const newFileName = `[${req.userId}]-${Date.now().toString()}-${file.originalname}`;
      callback(null, newFileName);
    }
  }),
  fileFilter: (req, file, callback) => {
    const isAccepted = ['image/png', 'image/jpg', 'image/jpeg']
      .find(validFormat => validFormat == file.mimetype );

    if(isAccepted) return callback(null, true);
    
    return callback(null, false);
  }
}

module.exports = { multerConfig };