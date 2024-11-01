import clsx from 'clsx';
import * as React from 'react';

const variants = {
  colored:
    'px-2 py-1 bg-[#FFCA104D] rounded-[10px] inline-flex justify-start items-center text-[#F06110] number-sm break-words',
  secondary:
    'px-2 py-1 bg-primary-100 border-[1px] border-primary-500 rounded-[10px] inline-flex justify-start items-center text-primary-600 tag break-words',
  tertiary:
    'px-2 py-1 bg-neutral-20 rounded-[10px] inline-flex justify-start items-center text-neutral-60 tag break-words',
};

interface ITagProps {
  variant: keyof typeof variants;
  children?: React.ReactNode;
  className?: string;
}

export const Tag = ({
  children,
  className = '',
  variant,
}: ITagProps): React.ReactElement => {
  return <div className={clsx(variants[variant], className)}>{children}</div>;
};
