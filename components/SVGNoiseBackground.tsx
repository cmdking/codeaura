// components/SVGNoiseBackground.tsx
"use client";

import React from 'react';
import { useInteractiveMouseEffect } from '../app/hooks/useInteractiveMouseEffect';

const SVGNoiseBackground: React.FC = () => {
  const mouse1 = useInteractiveMouseEffect();

  return (
    <div className="gradient-bg">
      <svg 
        viewBox="0 0 100vw 100vw" // Corrected viewBox for valid SVG attributes
        xmlns='http://www.w3.org/2000/svg'
        className="noiseBg"
      >
        <filter id='noiseFilterBg'>
          <feTurbulence 
            type='fractalNoise'
            baseFrequency='0.6'
            stitchTiles='stitch'
          />
        </filter>
        <rect
          width='100%'
          height='100%'
          preserveAspectRatio="xMidYMid meet"
          filter='url(#noiseFilterBg)'
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive" ref={mouse1}></div>
      </div>
    </div>
  );
};

export default SVGNoiseBackground;
