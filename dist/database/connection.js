"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knexfile_1 = __importDefault(require("../knexfile"));
// Set environment from `.env`
var knex = knex_1.default(knexfile_1.default);
exports.default = knex;
