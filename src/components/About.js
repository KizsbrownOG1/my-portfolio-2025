"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
var about_photo_jpg_1 = __importDefault(require("@/assets/about-photo.jpg"));
var About = function () {
    var highlights = [
        {
            icon: lucide_react_1.Code2,
            title: "Clean Code",
            description: "Writing maintainable, scalable code following best practices",
        },
        {
            icon: lucide_react_1.Palette,
            title: "Modern Design",
            description: "Creating beautiful, responsive interfaces that users love",
        },
        {
            icon: lucide_react_1.Rocket,
            title: "Performance",
            description: "Optimizing applications for speed and efficiency",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "about", className: "py-20 bg-secondary/30", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl font-bold mb-4 text-center", children: "About Me" }), (0, jsx_runtime_1.jsx)("div", { className: "h-1 w-20 bg-gradient-accent mx-auto mb-12" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row gap-8 items-center mb-12", children: [(0, jsx_runtime_1.jsx)("div", { className: "md:w-1/3 about-image", children: (0, jsx_runtime_1.jsx)("img", { src: about_photo_jpg_1.default, alt: "Developer at work", className: "w-full h-auto rounded-lg shadow-card object-cover", loading: "lazy" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "md:w-2/3 about-text", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-lg text-muted-foreground mb-4 leading-relaxed", children: "I'm a passionate full-stack developer with expertise in building modern web applications. With a focus on creating elegant solutions to complex problems, I combine technical skills with creative design to deliver exceptional user experiences." }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "My journey in development has equipped me with a diverse skill set and the ability to adapt to new technologies quickly. I believe in writing clean, maintainable code and creating intuitive user interfaces that make a difference." })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-3 gap-6 mt-12", children: highlights.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(card_1.Card, { className: "about-card p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4", children: (0, jsx_runtime_1.jsx)(item.icon, { className: "text-accent-foreground", size: 32 }) }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-2", children: item.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-muted-foreground", children: item.description })] }, index)); }) })] }) }) }));
};
exports.default = About;
