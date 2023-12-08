import { cn } from "lib/utils";
import { createElement, forwardRef } from "react";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth: boolean;
  isLoading?: boolean;
  icon?: IconType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading,
      className,
      label,
      iconURL,
      backgroundColor,
      textColor,
      borderColor,
      fullWidth,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          "flex justify-center items-center h-[56px] border-b-[7px] text-chocolate font-bold border-yellowDeep rounded-[6px] w-full bg-yellow",
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading &&
          icon &&
          createElement(icon, {
            color: textColor,
            className: "mr-1 animate-spin",
          })}

        {!isLoading &&
          icon &&
          createElement(icon, {
            color: textColor,
            className: "mr-1 h-8 w-8",
          })}

        {isLoading ? "Loading..." : label}
      </button>
    );
  }
);

export default Button;
