"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connection_1 = __importDefault(require("./models/connection"));
const PORT = 3000;
app_1.default.listen(() => {
    console.log('Server rodando na porta: ' + PORT);
});
connection_1.default.initialize()
    .then(() => {
    console.log('Hora do show!');
})
    .catch((error) => console.log(error));
