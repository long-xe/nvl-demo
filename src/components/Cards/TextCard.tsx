import clsx from 'clsx';
import * as React from 'react';

const statuses = {
  default:
    'inline-flex items-center justify-center bg-neutral-0 shadow-[0px_2px_0px_0px_#BDBDBD] rounded-[18px] overflow-hidden border-2 border-neutral-30 text-center text-neutral-60 title-2 break-words',
  selected:
    'inline-flex items-center justify-center bg-[#FFFACF] shadow-[0px_2px_0px_0px_#FFD954] rounded-[18px] overflow-hidden border-2 border-sub-yellow-600 text-center text-neutral-60 title-2 break-words',
  correct:
    'inline-flex items-center justify-center bg-primary-100 shadow-[0px_2px_0px_0px_#7DD4CA] rounded-[18px] overflow-hidden border-2 border-primary-400 text-center text-primary-700 title-2 break-words',
  incorrect:
    'inline-flex items-center justify-center bg-[#FFE9EC] shadow-[0px_2px_0px_0px_#FF4363] rounded-[18px] overflow-hidden border-2 border-sub-red-600 text-center text-sub-red-600 title-2 break-words',
  disabled:
    'inline-flex items-center justify-center bg-neutral-20 shadow-[0px_2px_0px_0px_#C9C9C9] rounded-[18px] overflow-hidden border-2 border-neutral-30 text-center text-neutral-50 title-2 break-words',
};

const paddingSizes = {
  sm: 'px-6 py-5',
  lg: 'px-6 py-4',
};

interface ITextCardProps {
  status: keyof typeof statuses;
  paddingSize: keyof typeof paddingSizes;
  children?: React.ReactNode;
  className?: string;
}

export const TextCard = ({
  children,
  className = '',
  status,
  paddingSize
}: ITextCardProps): React.ReactElement => {
  return <div className={clsx(statuses[status], paddingSizes[paddingSize],className)}>{children}</div>;
};
