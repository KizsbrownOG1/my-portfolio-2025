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

import one from "@/assets/IMG-20251017-WA0005.jpg";
import two from "@/assets/IMG-20251018-WA0022.jpg";
import three from "@/assets/IMG-20251018-WA0025.jpg";
import four from "@/assets/IMG-20251018-WA0030.jpg";
import five from "@/assets/IMG-20251018-WA0032.jpg";
import six from "@/assets/IMG-20251018-WA0034.jpg";
import seven from "@/assets/IMG-20251018-WA0035.jpg";
import eight from "@/assets/IMG-20251018-WA0038.jpg";

const images = [one, two, three, four, five, six, seven, eight];

const HiddenImages = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        whiteSpace: "nowrap",
      }}
    >
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Portfolio image ${index + 1}`} />
      ))}
    </div>
  );
};

export default HiddenImages;
