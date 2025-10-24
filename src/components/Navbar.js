"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var Navbar = function () {
    var _a = (0, react_1.useState)(false), isScrolled = _a[0], setIsScrolled = _a[1];
    var _b = (0, react_1.useState)(false), isMobileMenuOpen = _b[0], setIsMobileMenuOpen = _b[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    var scrollToSection = function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };
    var navLinks = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Experience", id: "experience" },
        { label: "Contact", id: "contact" },
    ];
    return ((0, jsx_runtime_1.jsx)("nav", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"), children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4 py-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return scrollToSection("home"); }, className: "text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent", children: "CHIBUIKE" }), (0, jsx_runtime_1.jsx)("div", { className: "hidden md:flex items-center gap-8", children: navLinks.map(function (link) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return scrollToSection(link.id); }, className: "text-foreground hover:text-accent transition-colors", children: link.label }, link.id)); }) }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", size: "icon", className: "md:hidden", onClick: function () { return setIsMobileMenuOpen(!isMobileMenuOpen); }, children: isMobileMenuOpen ? (0, jsx_runtime_1.jsx)(lucide_react_1.X, {}) : (0, jsx_runtime_1.jsx)(lucide_react_1.Menu, {}) })] }), isMobileMenuOpen && ((0, jsx_runtime_1.jsx)("div", { className: "md:hidden mt-4 pb-4 animate-fade-in", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-4", children: navLinks.map(function (link) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return scrollToSection(link.id); }, className: "text-foreground hover:text-accent transition-colors text-left py-2", children: link.label }, link.id)); }) }) }))] }) }));
};
exports.default = Navbar;
