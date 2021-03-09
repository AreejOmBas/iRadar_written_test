"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
var port = process.env.PORT || 5000;
var db = {
    conditions: require("../data/conditions")
};
app.get('/', function (req, res) {
    res.send('Hello from Server');
});
app.get('/api/condition', function (req, res) {
    res.json(db.conditions);
});
app.listen(port, function () { return console.log("App is lestining on Port " + port); });
