"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var use_toast_1 = require("@/hooks/use-toast");
var api_1 = require("@/lib/api");
var lucide_react_1 = require("lucide-react");
var Contact = function () {
    var toast = (0, use_toast_1.useToast)().toast;
    var _a = (0, react_1.useState)({
        name: "",
        email: "",
        message: "",
    }), formData = _a[0], setFormData = _a[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch((0, api_1.getApiUrl)(), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                            body: new URLSearchParams(formData).toString(),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (data.success) {
                        toast({
                            title: "Message Sent!",
                            description: "Thank you for reaching out. I'll get back to you soon.",
                        });
                        setFormData({ name: "", email: "", message: "" });
                    }
                    else {
                        toast({
                            title: "Error",
                            description: data.message,
                        });
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    toast({
                        title: "Error",
                        description: "Something went wrong. Please try again.",
                    });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var contactInfo = [
        { icon: lucide_react_1.Mail, label: "Email", value: "gchibuike1984@gmail.com" },
        { icon: lucide_react_1.Phone, label: "Phone", value: "+2347012780251" },
        { icon: lucide_react_1.MapPin, label: "Location", value: "Satellite Town Lagos, Nigeria" },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "contact", className: "py-20 bg-secondary/30", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "contact-header text-4xl font-bold mb-4 text-center", children: "Get In Touch" }), (0, jsx_runtime_1.jsx)("div", { className: "h-1 w-20 bg-gradient-accent mx-auto mb-12" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8", children: [(0, jsx_runtime_1.jsxs)(card_1.Card, { className: "contact-info p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-semibold mb-6", children: "Contact Information" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: contactInfo.map(function (info, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)(info.icon, { className: "text-accent", size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm text-muted-foreground", children: info.label }), (0, jsx_runtime_1.jsx)("p", { className: "font-medium", children: info.value })] })] }, index)); }) })] }), (0, jsx_runtime_1.jsxs)(card_1.Card, { className: "contact-form p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-semibold mb-6", children: "Send a Message" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "Your Name", value: formData.name, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { name: e.target.value })); }, required: true }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(input_1.Input, { type: "email", placeholder: "Your Email", value: formData.email, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { email: e.target.value })); }, required: true }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { placeholder: "Your Message", value: formData.message, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { message: e.target.value })); }, rows: 5, required: true }) }), (0, jsx_runtime_1.jsx)(button_1.Button, { type: "submit", className: "w-full bg-accent hover:bg-accent/90", children: "Send Message" })] })] })] })] }) }) }));
};
exports.default = Contact;
