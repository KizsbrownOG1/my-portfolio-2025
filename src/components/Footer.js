"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lucide_react_1 = require("lucide-react");
var favicon_ico_1 = __importDefault(require("@/assets/favicon.ico"));
var Footer = function () {
    return ((0, jsx_runtime_1.jsx)("footer", { className: "bg-primary text-primary-foreground py-8", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("img", { src: favicon_ico_1.default, alt: "Profile", className: "w-12 h-12 rounded-full object-cover border-2 border-accent", loading: "lazy" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm", children: ["\u00A9 ", new Date().getFullYear(), " Chibuike. All rights reserved."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://github.com/Chibuike1984", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent transition-colors", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Github, { size: 20 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://www.linkedin.com/in/chibuike-goodluck-3005a2359", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent transition-colors", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Linkedin, { size: 20 }) }), (0, jsx_runtime_1.jsx)("a", { href: "mailto:gchibuike1984@gmail.com", className: "hover:text-accent transition-colors", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { size: 20 }) })] })] }) }) }));
};
exports.default = Footer;
