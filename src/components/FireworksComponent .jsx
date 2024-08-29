// src/components/FireworksComponent.js

import React from "react";
import { Fireworks } from "@fireworks-js/react";

const FireworksComponent = ({ show, className = "" }) => {
  if (!show) return null; // If show is false, don't render anything
  return (
    <div className={`absolute w-full h-full ${className}`}>
      {/* Fireworks positioned absolutely within the relative container */}
      <Fireworks
        options={{
          rocketsPoint: {
            min: 50,
            max: 50,
          },
          hue: {
            min: 0,
            max: 360,
          },
          delay: {
            min: 30,
            max: 60,
          },
          friction: 1,
        }}
        style={{
          position: "absolute", // Make the Fireworks component absolute
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default FireworksComponent;
