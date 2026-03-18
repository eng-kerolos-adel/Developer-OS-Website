"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="md:fixed md:top-0 md:left-0 md:z-9999 md:pointer-events-none md:w-10 md:h-10 md:rounded-full md:bg-foreground md:mix-blend-difference md:transition-transform md:duration-75 md:ease-out"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    />
  );
}
