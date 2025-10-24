"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var card_1 = require("@/components/ui/card");
var badge_1 = require("@/components/ui/badge");
var Skills = function () {
    var skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "jQuery", "Tailwind CSS", "Vue.js"],
        },
        {
            title: "Backend",
            skills: ["PHP", "Laravel", "CodeIgniter", "Python", "Flask", "REST APIs", "GraphQL"],
        },
        {
            title: "Database & Tools",
            skills: ["MySQL", "PostgreSQL", "SQLite", "Git", "GitHub",],
        },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "skills", className: "py-20", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "skills-header text-4xl font-bold mb-4 text-center", children: "Skills & Technologies" }), (0, jsx_runtime_1.jsx)("div", { className: "h-1 w-20 bg-gradient-accent mx-auto mb-12" }), (0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-3 gap-8", children: skillCategories.map(function (category, categoryIndex) { return ((0, jsx_runtime_1.jsxs)(card_1.Card, { className: "skill-card p-6 hover:shadow-card transition-shadow", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-4 text-accent", children: category.title }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-2", children: category.skills.map(function (skill, skillIndex) { return ((0, jsx_runtime_1.jsx)(badge_1.Badge, { variant: "secondary", className: "text-sm", children: skill }, skillIndex)); }) })] }, categoryIndex)); }) })] }) }) }));
};
exports.default = Skills;
