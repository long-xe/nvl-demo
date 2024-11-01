import clsx from 'clsx';
import * as React from 'react';

const variants = {
  outLine:
    'border-2 border-neutral-30 bg-neutral-0 shadow-[0px_2px_0px_0px_#ABABBC] p-3',
  blank: 'bg-neutral-10 shadow-[0px_3px_0px_0px_#D9D9E2] p-3',
  filled: 'bg-overlay-black border-b-[3px] border-b-overlay-white',
  colored: '',
};

const sizes = {
  none: 'p-0',
  sm: 'rounded-[14px] p-[10px]',
  md: 'rounded-[18px] p-[12px]',
  lg: 'rounded-[20px] p-[12px]',
  xs: 'rounded-[12px] p-[8px]',
};

const disabledButton = (variant: keyof typeof variants, disabled?: boolean) => {
  if (variant === 'colored') {
    return disabled
      ? ''
      : 'active:bg-primary-100 active:border-[1px] active:rounded-[30px] active:border-primary-200';
  } else {
    return variants[variant];
  }
};

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof variants;
  size: keyof typeof sizes;
  iconLink: string;
  disableIconLink: string;
};

export const IconButton = ({
  className = '',
  variant,
  size,
  ...props
}: IconButtonProps): React.ReactElement => {
  return (
    <button
      className={clsx(
        variants[variant],
        sizes[size],
        disabledButton(variant, props.disabled),
        className,
      )}
      {...props}
    >
      <img
        src={
          props.disabled && variant === 'colored'
            ? props.disableIconLink
            : props.iconLink
        }
        alt=''
      ></img>
    </button>
  );
};
