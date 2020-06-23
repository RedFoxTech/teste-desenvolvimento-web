"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default({
    exposedHeaders: ['Content-Length', 'x-total-count'],
}));
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads')));
dotenv_1.default.config();
app.listen(3333, function () { return [
    console.log('Server is running on port 3333')
]; });
