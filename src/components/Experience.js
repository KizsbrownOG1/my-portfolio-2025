"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
var Experience = function () {
    var experiences = [
        {
            type: "work",
            title: "Full-Stack Developer",
            organization: "Aventum Consulting (Remote)",
            period: "Feb 2025 - June 2025",
            description: "Built a large-scale Payroll and HR Management application, implementing payroll features, employee workflows, and reporting modules. Optimized PostgreSQL database performance and contributed to scalable architecture.",
        },
        {
            type: "work",
            title: "Full-Stack Developer",
            organization: "Infytel Communication Ltd (Hybrid)",
            period: "Nov 2023 - Aug 2024",
            description: "Developed HR Management, Payroll, and CRM features for an internal EIS platform, optimized frontend components, and debugged the mobile-first employee portal.",
        },
        {
            type: "education",
            title: "HND in Computer Science",
            organization: "Lagos State Polytechnic",
            period: "2022 - 2024",
            description: "Focused on software engineering, algorithms, and web development.",
        },
        {
            type: "training",
            title: "Software Engineering Training",
            organization: "Hantek Digital Consult",
            location: "Lagos",
            period: "2022 - 2023",
            description: "Completed hands-on training in software development, covering web development, backend integration, and project-based application building.",
        },
    ];
    var getIcon = function (type) {
        switch (type) {
            case "work":
                return (0, jsx_runtime_1.jsx)(lucide_react_1.Briefcase, { className: "text-accent-foreground", size: 24 });
            case "education":
                return (0, jsx_runtime_1.jsx)(lucide_react_1.GraduationCap, { className: "text-accent-foreground", size: 24 });
            case "training":
                return (0, jsx_runtime_1.jsx)(lucide_react_1.BookOpen, { className: "text-accent-foreground", size: 24 });
            default:
                return null;
        }
    };
    return ((0, jsx_runtime_1.jsx)("section", { id: "experience", className: "py-20", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "experience-header text-4xl font-bold mb-4 text-center", children: "Experience & Education" }), (0, jsx_runtime_1.jsx)("div", { className: "h-1 w-20 bg-gradient-accent mx-auto mb-12" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent hidden md:block" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-8", children: experiences.map(function (exp, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "experience-item relative", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "hidden md:flex w-16 h-16 rounded-full bg-gradient-accent items-center justify-center flex-shrink-0 relative z-10", children: getIcon(exp.type) }), (0, jsx_runtime_1.jsxs)(card_1.Card, { className: "flex-1 p-6 hover:shadow-card transition-shadow", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between mb-2", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold", children: exp.title }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm text-muted-foreground", children: exp.period })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-accent font-medium mb-2", children: exp.organization }), (0, jsx_runtime_1.jsx)("p", { className: "text-muted-foreground", children: exp.description })] })] }) }, index)); }) })] })] }) }) }));
};
exports.default = Experience;
