"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: path_1.default.resolve(__dirname, '..', '..', 'uploads'),
        filename: function (request, file, callback) {
            var hash = crypto_1.default.randomBytes(6).toString('hex');
            var fileName = hash + "-" + file.originalname;
            callback(null, fileName);
        }
    })
};
