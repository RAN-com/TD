import React from "react";

const ImageGallery = ({ mainImage, images, setMainImage }) => {
  return (
    <div className="md:w-1/2 flex flex-col items-center">
      <img 
        src={mainImage} 
        alt="Main Product" 
        className="w-full h-80 object-cover rounded-md shadow-md mb-4" 
      />
      <div className="flex gap-2">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Thumbnail ${index}`} 
            className="w-20 h-20 object-cover rounded-md shadow-md cursor-pointer border-2 border-transparent hover:border-yellow-500" 
            onClick={() => setMainImage(img)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
