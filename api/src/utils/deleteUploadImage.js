const fs = require('fs');
const path = require('path');

function deleteUploadImage(imageName) {
  const imagePath = `${path.resolve(__dirname, '..', '..', 'uploads')}/${imageName}`;
  fs.unlink(imagePath, (err) => { if (err) console.log(err)});
}

function deleteAllUploadImages(userId) {
  const imagesDirectory = path.resolve(__dirname, '..', '..', 'uploads');

  fs.readdir(imagesDirectory, (err, files) => {
    if (err) console.log(err);
      
    for (const file of files) {
      const fileUserId = file.split(']-')[0].replace('[', '');

      if (fileUserId === userId) {
        fs.unlink(path.join(imagesDirectory, file), err => {
          if (err) console.log(err);
        });
      }
    }
  }); 
}

module.exports = {
  deleteUploadImage,
  deleteAllUploadImages
}