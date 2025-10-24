"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Navbar_1 = __importDefault(require("@/components/Navbar"));
var Hero_1 = __importDefault(require("@/components/Hero"));
var About_1 = __importDefault(require("@/components/About"));
var Skills_1 = __importDefault(require("@/components/Skills"));
var Projects_1 = __importDefault(require("@/components/Projects"));
var Experience_1 = __importDefault(require("@/components/Experience"));
var Contact_1 = __importDefault(require("@/components/Contact"));
var Footer_1 = __importDefault(require("@/components/Footer"));
var use_scroll_reveal_1 = require("@/hooks/use-scroll-reveal");
var Index = function () {
    (0, use_scroll_reveal_1.useScrollReveal)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(Skills_1.default, {}), (0, jsx_runtime_1.jsx)(Projects_1.default, {}), (0, jsx_runtime_1.jsx)(Experience_1.default, {}), (0, jsx_runtime_1.jsx)(Contact_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Index;
