"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// // src/components/HiddenImages.tsx
// import one from "@/assets/IMG-20251017-WA0005.jpg";
// import two from "@/assets/IMG-20251018-WA0022.jpg";
// import three from "@/assets/IMG-20251018-WA0025.jpg";
// import four from "@/assets/IMG-20251018-WA0030.jpg";
// import five from "@/assets/IMG-20251018-WA0032.jpg";
// import six from "@/assets/IMG-20251018-WA0034.jpg";
// import seven from "@/assets/IMG-20251018-WA0035.jpg";
// import eight from "@/assets/IMG-20251018-WA0038.jpg";
// const images = [one, two, three, four, five, six, seven, eight];
// const HiddenImages = () => {
//   return (
//     <div>
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt={`Portfolio image ${index + 1}`}
//           style={{
//             width: "300px",      // set desired width
//             height: "auto",      // maintain aspect ratio
//             display: "block",
//             margin: "20px auto", // center images
//           }}
//         />
//       ))}
//     </div>
//   );
// };
// export default HiddenImages;
// src/components/HiddenImages.tsx
var IMG_20251017_WA0005_jpg_1 = __importDefault(require("@/assets/IMG-20251017-WA0005.jpg"));
var IMG_20251018_WA0022_jpg_1 = __importDefault(require("@/assets/IMG-20251018-WA0022.jpg"));
var IMG_20251018_WA0025_jpg_1 = __importDefault(require("@/assets/IMG-20251018-WA0025.jpg"));
var IMG_20251018_WA0030_jpg_1 = __importDefault(require("@/assets/IMG-20251018-WA0030.jpg"));
var IMG_20251018_WA0032_jpg_1 = __importDefault(require("@/assets/IMG-20251018-WA0032.jpg"));
var IMG_20251018_WA0034_jpg_1 = __importDefault(require("@/assets/IMG-20251018-WA0034.jpg"));
var IMG_20251018_WA0035_jpg_1 = __importDefault(require("@/assets/IMG-20251018-WA0035.jpg"));
var IMG_20251018_WA0038_jpg_1 = __importDefault(require("@/assets/IMG-20251018-WA0038.jpg"));
var images = [IMG_20251017_WA0005_jpg_1.default, IMG_20251018_WA0022_jpg_1.default, IMG_20251018_WA0025_jpg_1.default, IMG_20251018_WA0030_jpg_1.default, IMG_20251018_WA0032_jpg_1.default, IMG_20251018_WA0034_jpg_1.default, IMG_20251018_WA0035_jpg_1.default, IMG_20251018_WA0038_jpg_1.default];
var HiddenImages = function () {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            whiteSpace: "nowrap",
        }, children: images.map(function (img, index) { return ((0, jsx_runtime_1.jsx)("img", { src: img, alt: "Portfolio image ".concat(index + 1) }, index)); }) }));
};
exports.default = HiddenImages;
