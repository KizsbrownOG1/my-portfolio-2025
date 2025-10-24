"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var hero_bg_jpg_1 = __importDefault(require("@/assets/hero-bg.jpg"));
var profile_photo_jpg_1 = __importDefault(require("@/assets/profile-photo.jpg"));
var Chibuike_Resume_1_pdf_1 = __importDefault(require("@/assets/Chibuike_Resume-1.pdf"));
var Hero = function () {
    var scrollToSection = function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return ((0, jsx_runtime_1.jsx)("section", { id: "home", className: "min-h-screen flex items-center justify-center relative overflow-hidden", style: {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(".concat(hero_bg_jpg_1.default, ")"),
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4 relative z-10", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12", children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-image flex-shrink-0", children: (0, jsx_runtime_1.jsx)("img", { src: profile_photo_jpg_1.default, alt: "Professional headshot", className: "w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent shadow-elegant", loading: "eager" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "hero-content text-center md:text-left", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-5xl md:text-7xl font-bold mb-6 text-white", children: ["Hi, I'm ", (0, jsx_runtime_1.jsx)("span", { className: "bg-gradient-accent bg-clip-text text-transparent", children: "Okafor Chibuike" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl md:text-2xl text-gray-200 mb-4", children: "FullStack Developer" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg text-gray-300 mb-8", children: "Crafting end-to-end web solutions, from interactive websites to robust applications, using modern technologies" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4 justify-center md:justify-start mb-8", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { onClick: function () {
                                            var link = document.createElement("a");
                                            link.href = Chibuike_Resume_1_pdf_1.default;
                                            link.download = "Chibuike_Resume-1.pdf";
                                            link.click();
                                        }, size: "lg", className: "bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant", children: "Download CV" }), (0, jsx_runtime_1.jsx)(button_1.Button, { onClick: function () { return scrollToSection("contact"); }, variant: "outline", size: "lg", className: "border-white/20 text-black hover:bg-white/10", children: "Get In Touch" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4 justify-center md:justify-start", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://github.com/Chibuike1984", target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-accent transition-colors", "aria-label": "GitHub Profile", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Github, { size: 24 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://www.linkedin.com/in/chibuike-goodluck-3005a2359", target: "_blank", rel: "noopener noreferrer", className: "text-white hover:text-accent transition-colors", "aria-label": "LinkedIn Profile", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Linkedin, { size: 24 }) }), (0, jsx_runtime_1.jsx)("a", { href: "mailto:gchibuike1984@gmail.com", className: "text-white hover:text-accent transition-colors", "aria-label": "Email Contact", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { size: 24 }) })] })] })] }) }) }));
};
exports.default = Hero;
