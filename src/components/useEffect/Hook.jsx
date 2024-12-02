import React, { useEffect, useMemo, useState } from "react";

// Custom hook for tracking mouse position
function useMouse(ref) {
  const [mouse, setMouse] = useState({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    if (ref.current) {
      const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        if (rect) {
          setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            isActive: true,
          });
        }
      };

      const handleMouseOut = () => {
        setMouse({
          x: 0,
          y: 0,
          isActive: false,
        });
      };

      ref.current.addEventListener("mousemove", handleMouseMove);
      ref.current.addEventListener("mouseout", handleMouseOut);

      return () => {
        ref.current.removeEventListener("mousemove", handleMouseMove);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return mouse;
}

export function useMouseOverZoom(source, target, cursor, radius = 25) {
  const { x, y, isActive } = useMouse(source);
  const zoomBounds = useMemo(() => {
    return {
      left: x - radius,
      top: y - radius,
      width: radius * 2,
      height: radius * 2,
    };
  }, [x, y, radius]);

  useEffect(() => {
    if (cursor.current) {
      const { left, top, width, height } = zoomBounds;
      cursor.current.style.left = ` ${left}px`;
      cursor.current.style.top = `${top}px`;
      cursor.current.style.width = `${width}px`;
      cursor.current.style.height = `${height}px`;
      cursor.current.style.display = isActive ? "block" : "none";
    }
  }, [zoomBounds, isActive, cursor]);

  useEffect(() => {
    if (source.current && target.current) {
      const ctx = target.current.getContext("2d");
      if (ctx) {
        if (isActive) {
          const { left, top, width, height } = zoomBounds;
          const imageRatio = source.current.naturalWidth / source.current.width;
          ctx.drawImage(
            source.current,
            left * imageRatio,
            top * imageRatio,
            width * imageRatio,
            height * imageRatio,
            0,
            0,
            target.current.width,
            target.current.height
          );
        } else {
          ctx.clearRect(0, 0, target.current.width, target.current.height);
        }
      }
    }
  }, [zoomBounds, isActive, source, target]);
}
