"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
(0, client_1.createRoot)(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(App_tsx_1.default, {}));
