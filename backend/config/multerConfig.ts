import path from "path";
import crypto from "crypto";
import multer from "multer";

export default {
  dest: path.resolve(__dirname, "..", "images"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "images"));
    },
    filename: (req, file, cb) => {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const filename = `${fileHash}-${file.originalname}`;

      return cb(null, filename);
    },
  }),
};
