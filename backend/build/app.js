"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const app = (0, express_1.default)();
// app.use(cors())
app.use(express_1.default.json());
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});
exports.default = app;
