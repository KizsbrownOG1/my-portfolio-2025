"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollReveal = void 0;
var react_1 = require("react");
var scrollreveal_1 = __importDefault(require("scrollreveal"));
var useScrollReveal = function () {
    (0, react_1.useEffect)(function () {
        var sr = (0, scrollreveal_1.default)({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 200,
            reset: false,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });
        // Hero section
        sr.reveal('.hero-content', { delay: 300 });
        sr.reveal('.hero-image', { delay: 100, origin: 'left' });
        // About section
        sr.reveal('.about-image', { origin: 'left', delay: 100 });
        sr.reveal('.about-text', { origin: 'right', delay: 200 });
        sr.reveal('.about-card', { interval: 200 });
        // Skills section
        sr.reveal('.skills-header', { delay: 100 });
        sr.reveal('.skill-card', { interval: 150 });
        // Projects section
        sr.reveal('.projects-header', { delay: 100 });
        sr.reveal('.project-card', { interval: 200 });
        // Experience section
        sr.reveal('.experience-header', { delay: 100 });
        sr.reveal('.experience-item', { interval: 200 });
        // Contact section
        sr.reveal('.contact-header', { delay: 100 });
        sr.reveal('.contact-info', { origin: 'left', delay: 200 });
        sr.reveal('.contact-form', { origin: 'right', delay: 200 });
        return function () {
            sr.destroy();
        };
    }, []);
};
exports.useScrollReveal = useScrollReveal;
