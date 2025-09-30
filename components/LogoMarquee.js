'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LogoMarquee = ({ logos = [], speed = 50, direction = 'left', pauseOnHover = false }) => {
  // Create just one duplicate set for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Marquee 
      speed={speed} 
      direction={direction} 
      pauseOnHover={pauseOnHover} 
      gradient={false}
      className="overflow-hidden"
    >
      {duplicatedLogos.map((logo, index) => (
        <div key={index} className="flex items-center mx-16">
          <img
            src={logo}
            alt={`logo-${index}`}
            className="h-[70px] w-[150px] object-contain"
            loading="lazy" // Add lazy loading for better performance
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;