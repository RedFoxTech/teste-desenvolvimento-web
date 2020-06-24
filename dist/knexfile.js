"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
require('dotenv').config();
var path_1 = __importDefault(require("path"));
var knexConfig = {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
    },
};
exports.default = knexConfig;
