import React from "react";

const Text = ({
  as: Component = "span",
  color = "inherit",
  size = "inherit",
  weight = "inherit",
  family = "inherit",
  className = "",
  style,
  children,
  ...props
}) => {
  return (
    <Component
      className={className}
      style={{
        color,
        fontSize: size,
        fontWeight: weight,
        fontFamily: family,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
