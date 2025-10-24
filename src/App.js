"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var toaster_1 = require("@/components/ui/toaster");
var sonner_1 = require("@/components/ui/sonner");
var tooltip_1 = require("@/components/ui/tooltip");
var react_query_1 = require("@tanstack/react-query");
var react_router_dom_1 = require("react-router-dom");
var Index_1 = __importDefault(require("./pages/Index"));
var NotFound_1 = __importDefault(require("./pages/NotFound"));
var HiddenImages_1 = __importDefault(require("@/components/HiddenImages"));
var queryClient = new react_query_1.QueryClient();
var App = function () { return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: queryClient, children: (0, jsx_runtime_1.jsxs)(tooltip_1.TooltipProvider, { children: [(0, jsx_runtime_1.jsx)(toaster_1.Toaster, {}), (0, jsx_runtime_1.jsx)(sonner_1.Toaster, {}), (0, jsx_runtime_1.jsx)(HiddenImages_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Index_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }) })] }) })); };
exports.default = App;
