import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // 1. Safety check: prevent crash if props are missing
  const { top = '0%', left = '0%' } = position || {};
  const { width = '300px', height = '300px' } = size || {};

  return (
    <div
      className="absolute pointer-events-none" // 2. pointer-events-none lets you click links behind the blob
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)', // Centers the blob on the coordinates
        zIndex: 0, 
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" // Changed animate-blob to animate-pulse (standard tailwind)
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;