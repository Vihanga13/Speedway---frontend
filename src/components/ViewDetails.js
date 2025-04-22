// // ProductDetails.jsx
// import React, { useState } from 'react';

// const ProductDetails = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//   // Sample images array - replace with your actual images
//   const images = [
//     '/path-to-main-image.jpg',
//     '/path-to-thumbnail-1.jpg',
//     '/path-to-thumbnail-2.jpg'
//   ];

//   const productDetails = {
//     views: 143,
//     price: 'Rs 12,000',
//     condition: 'Reconditioned',
//     partType: 'Doors',
//     brand: 'Nissan',
//     model: 'Tiida'
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => 
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       {/* Image Gallery Section */}
//       <div className="mb-8">
//         {/* Views Counter */}
//         <div className="flex items-center gap-2 mb-4 text-gray-600">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//           </svg>
//           <span>{productDetails.views} views</span>
//         </div>

//         {/* Main Image */}
//         <div className="relative">
//           <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-lg overflow-hidden">
//             <img
//               src={images[currentImageIndex]}
//               alt="Product"
//               className="w-full h-full object-contain"
//             />
//           </div>
          
//           {/* Navigation Arrows */}
//           <button 
//             onClick={prevImage}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <button 
//             onClick={nextImage}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Thumbnails */}
//         <div className="flex gap-4 mt-4">
//           {images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
//                 currentImageIndex === index ? 'border-red-500' : 'border-transparent'
//               }`}
//             >
//               <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Product Details Section */}
//       <div className="space-y-6">
//         {/* Price */}
//         <div className="text-2xl font-bold text-red-700">
//           {productDetails.price}
//         </div>

//         {/* Details Table */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-4">
//             <div className="flex justify-between border-b pb-2">
//               <span className="text-gray-600">Condition:</span>
//               <span className="font-medium">{productDetails.condition}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="text-gray-600">Part or Accessory Type:</span>
//               <span className="font-medium">{productDetails.partType}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="text-gray-600">Brand:</span>
//               <span className="font-medium">{productDetails.brand}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="text-gray-600">Model:</span>
//               <span className="font-medium">{productDetails.model}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
