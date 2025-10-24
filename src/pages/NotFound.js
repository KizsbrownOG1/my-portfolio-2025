"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var NotFound = function () {
    var location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(function () {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex min-h-screen items-center justify-center bg-gray-100", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "mb-4 text-4xl font-bold", children: "404" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-4 text-xl text-gray-600", children: "Oops! Page not found" }), (0, jsx_runtime_1.jsx)("a", { href: "/", className: "text-blue-500 underline hover:text-blue-700", children: "Return to Home" })] }) }));
};
exports.default = NotFound;
