import React, { forwardRef } from "react";
import { cn } from "lib/utils";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div>
        <label className="inline-block mb-2" htmlFor={props.name}>
          {label}
        </label>
        <br />
        <input
          type={props.type}
          name={props.name}
          className={cn(
            "ring-4 ring-white/70 rounded-[6px] max-w-md h-[56px] w-[325px] )",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
