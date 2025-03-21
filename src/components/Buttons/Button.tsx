import React from "react";
import cn from "classnames";
import { ButtonProps } from "../GlobalTypes/GlobalTypes";

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  isRound,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "button",
        `button--${variant}`,
        isRound && "button--round",
        props.isSmall && "button--small",
        props.isBlock && "button--block"
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
