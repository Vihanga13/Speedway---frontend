import React from 'react';

const SpecialOffers = ({ title, image, validUntil }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative">
        {/* Image container with fixed aspect ratio */}
        <div className="aspect-square">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Red banner overlay at top */}
        <div className="absolute top-4 left-0 right-0 mx-auto w-3/4 h-8 bg-red-400 rounded opacity-80">
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg uppercase tracking-wide">
          {title}
        </h3>
        {validUntil && (
          <p className="text-sm text-gray-600 mt-2">
            Valid until {validUntil}
          </p>
        )}
      </div>
    </div>
  );
};

const SpecialOffersPage = () => {
  const offers = [
    {
      title: "BRAKE PADS, ROTORS, AND CALIPERS",
      image: "/images/brake-pads.jpg",
      validUntil: "JUNE 9, 2025"
    },
    {
      title: "AIR, OIL, AND FUEL FILTERS PACKAGE",
      image: "/images/filters-bundle.jpg",
      validUntil: "AUGUST 15, 2025"
    },
    {
      title: "SHOCK ABSORBERS AND STRUTS",
      image: "/images/suspension.jpg",
      validUntil: "DECEMBER 31, 2025"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">CURRENT SPECIAL OFFERS</h1>
      
      {/* Grid of offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <SpecialOffers
            key={index}
            title={offer.title}
            image={offer.image}
            validUntil={offer.validUntil}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersPage;