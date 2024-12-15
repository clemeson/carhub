import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import carImage from '../../../../assets/car-home.png'; // Adjust the path as necessary

const AnimatedCar = () => {
  const carRef = useRef(null);

  useEffect(() => {
    // Start the animation when the component mounts
    gsap.fromTo(
      carRef.current,
      { x: '-30%', opacity: 0 }, // Start off-screen left and invisible
      {
        x: '10%', // Move to off-screen right
        opacity: 50, // Fade in
        duration: 3, // Duration of the animation
        ease: 'power1.inOut', // Easing function for a smooth effect
        repeat: -2, // Repeat indefinitely
        yoyo: true, // Reverse the animation on repeat
      }
    );
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '300px' }}>
      <img
        className="w-fluid"
        src={carImage}
        alt="Moving Car"
        ref={carRef}
        style={{ position: 'absolute', width: '600px' }} // Adjust size as needed
      />
    </div>
  );
};

export default AnimatedCar;
