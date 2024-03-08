'use client'
import React from "react";

type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShapeType = Exclude<ShapeType, "cube">;

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};

const Shape = (props: ItemProps) => {
  const shape: ShapeType = "cube";
  const twoDShape: TwoDShapeType = "square";

  // Extract theme and color from the props
  const [theme, color] = props.color.split('-') as [ThemeType, ColorType];

  // Generate dynamic Tailwind classes based on theme and color
  const themeClass = `bg-${theme}`;
  const colorClass = `text-${color}`;

  return (
    <div className={`shape ${themeClass} ${colorClass}`}>
      <p>Shape: {shape}</p>
      <p>2D Shape: {twoDShape}</p>
    </div>
  );
};

export default Shape;
