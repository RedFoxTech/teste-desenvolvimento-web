import * as path from 'path';
import { diskStorage, Options } from 'multer';
import { UnsupportedMediaTypeException } from '@nestjs/common';

const imageStorage = diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/images');
  },

  filename: (req, file, callback) => {
    const [, extension] = file.mimetype.split('/');
    callback(null, `pokemonImg-${req.params.id}.${extension}`);
  },
});

export const imageSettings: Options = {
  storage: imageStorage,
  fileFilter: (req, file, callback) => {
    const availableFileFormats = ['.png', '.jpg', '.jpeg'];
    const fileExtension = path.extname(file.originalname);
    if (!availableFileFormats.includes(fileExtension)) {
      return callback(new UnsupportedMediaTypeException('invalid mime type'));
    }
    callback(null, true);
  },
};
