import React, { useState, useEffect } from "react";
interface Props {
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  movementOffset?: number;
  heightOffset?: number;
  maxLimitOffset?: number;
  startingOffset?: number;
  movementInterval?: number;
}
export const WanderingPet = ({
  src,
  width,
  height,
  className,
  movementOffset,
  heightOffset,
  maxLimitOffset,
  startingOffset,
  movementInterval,
}: Props) => {
  const [x, setX] = useState(startingOffset || -20);
  const maxX = window.innerWidth - (maxLimitOffset || 20);
  useEffect(() => {
    const interval = setInterval(() => {
      if (x > maxX) return setX(startingOffset || -20);
      setX(x + (movementOffset || 0.8));
    }, movementInterval || 50);
    return () => clearInterval(interval);
  }, [x]);
  return (
    <img
      className={className}
      src={src || "./cat.gif"}
      alt="Wandering pet"
      style={{
        left: `${x}px`,
        bottom: `${heightOffset || -9}px`,
        position: "fixed",
        height: height || "48px",
        zIndex: 50,
        width: width || "auto",
      }}
    />
  );
};
