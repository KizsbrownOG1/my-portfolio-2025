"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var project1_jpg_1 = __importDefault(require("@/assets/project1.jpg"));
var project2_jpg_1 = __importDefault(require("@/assets/project2.jpg"));
var project3_jpg_1 = __importDefault(require("@/assets/project3.jpg"));
var Projects = function () {
    var projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online shopping platform with cart, checkout, and payment integration",
            image: project1_jpg_1.default,
            tags: ["HTML5", "CSS3", "JavaScript", "PHP[Laravel]", "MySQL"],
            liveLink: "https://www.temu.com/",
            githubLink: "#",
        },
        {
            title: "Payroll Management App",
            description: "A web application for managing employee payrolls, tracking salaries, generating payslips, and handling tax deductions efficiently.",
            image: project2_jpg_1.default,
            tags: ["React", "Tailwind CSS", "JavaScript", "Python[Flask]", "PostgreSQL"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Weather Dashboard",
            description: "Beautiful weather forecast application with location-based data and interactive maps",
            image: project3_jpg_1.default,
            tags: ["React", "API Integration", "Charts", "CSS"],
            liveLink: "#",
            githubLink: "#",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "projects", className: "py-20 bg-secondary/30", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "projects-header text-4xl font-bold mb-4 text-center", children: "Featured Projects" }), (0, jsx_runtime_1.jsx)("div", { className: "h-1 w-20 bg-gradient-accent mx-auto mb-12" }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map(function (project, index) { return ((0, jsx_runtime_1.jsxs)(card_1.Card, { className: "project-card overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative overflow-hidden aspect-video", children: (0, jsx_runtime_1.jsx)("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover transition-transform duration-300 hover:scale-110" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-2", children: project.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-muted-foreground mb-4", children: project.description }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map(function (tag, tagIndex) { return ((0, jsx_runtime_1.jsx)("span", { className: "text-xs px-2 py-1 bg-accent/10 text-accent rounded-md", children: tag }, tagIndex)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { variant: "outline", size: "sm", asChild: true, children: (0, jsx_runtime_1.jsxs)("a", { href: project.liveLink, target: "_blank", rel: "noopener noreferrer", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ExternalLink, { size: 16, className: "mr-2" }), "Live Demo"] }) }), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", size: "sm", asChild: true, children: (0, jsx_runtime_1.jsxs)("a", { href: project.githubLink, target: "_blank", rel: "noopener noreferrer", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Github, { size: 16, className: "mr-2" }), "Code"] }) })] })] })] }, index)); }) })] }) }) }));
};
exports.default = Projects;
