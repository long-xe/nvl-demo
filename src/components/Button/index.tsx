import clsx from "clsx";
import * as React from "react";

const variants = {
  primary:
    "bg-primary-500 shadow-[0_3px_0_0_#00A491] text-neutral-0 hover:bg-primary-600 hover:shadow-[0_3px_0_0_#007B6D]",
  error: "bg-sub-red-50 shadow-[0_3px_0_0_#F0073F] text-neutral-0",
  secondary:
    "border-[2.5px] border-primary-500 bg-neutral-0 shadow-[0px_2px_0px_0px_#00CDB5] text-primary-500",
  "gradient-btn": "bg-gradient-1 text-neutral-0",
  "link-medium-btn": "text-sub-blue button-md",
  "link-small-btn": "text-sub-blue button-sm",
  "gradient-border-btn": "bg-linear-1 p-[1px] text-neutral-Blue",
};

const sizes = {
  none: "p-0",
  xs: "px-5 py-[10px] button-sm",
  sm: "px-5 py-[14px] button-md",
  md: "px-6 py-4 button-lg",
  lg: "px-7 py-4 button-lg",
};

const gradientTypes = {
  none: "",
  "md-gradient-border-btn": "px-[27px] py-[15px] button-lg",
  "sm-gradient-border-btn": "px-[19px] py-[13px] button-md",
};

const paddingTypes = {
  none: "rounded-none",
  xs: "rounded-[14px]",
  sm: "rounded-[18px]",
  md: "rounded-[20px]",
  lg: "rounded-[40px]",
};

const disabledButton = (variant: keyof typeof variants, disabled?: boolean) => {
  if (disabled) {
    switch (variant) {
      case "primary":
        return "bg-neutral-30 shadow-[0_3px_0_0_#ABABBC] text-neutral-50";
      case "secondary":
        return "border-[2.5px] border-neutral-30 bg-neutral-20 shadow-[0px_2px_0px_0px_#ABABBC] text-neutral-50";
      default:
        return variants[variant];
    }
  } else {
    return variants[variant];
  }
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  paddingType?: keyof typeof paddingTypes;
  isLoading?: boolean;
  gradientType?: keyof typeof gradientTypes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className = "",
    variant = "primary",
    size = "md",
    paddingType = "xs",
    gradientType = "none",
    ...props
  }) => {
    return (
      <button
        className={clsx(
          disabledButton(variant, props.disabled),
          sizes[size],
          paddingTypes[paddingType],
          className
        )}
        {...props}
      >
        {variant === "gradient-border-btn" ? (
          <div
            className={clsx(
              "bg-neutral-0",
              paddingTypes[paddingType],
              gradientTypes[gradientType]
            )}
          >
            {props.children}
          </div>
        ) : (
          props.children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
