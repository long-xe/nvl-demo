import clsx from 'clsx';
import * as React from 'react';

const commonImageCardClass = 'flex items-center justify-center p-[5px]';
const overlayClass =
  'absolute bg-overlay-black rounded-[20px] top-0 bottom-0 right-0 left-0';

const statuses = {
  default:
    'bg-neutral-0 shadow-[0px_2px_0px_0px_#ABABBC] rounded-[20px] border-2 border-neutral-30',
  selected:
    'bg-neutral-0 shadow-[0px_2px_0px_0px_#FFD954] rounded-[20px] border-2 border-sub-yellow-600',
  correct:
    'relative bg-neutral-0 shadow-[0px_2px_0px_0px_#66E1D3] rounded-[20px] border-2 border-primary-500',
  incorrect:
    'relative bg-neutral-0 shadow-[0px_2px_0px_0px_#FF4363] rounded-[20px] border-2 border-sub-red-600',
  disabled:
    'relative bg-overlay-black shadow-[0px_2px_0px_0px_#0000004D] rounded-[20px] border-2 border-neutral-30',
};

interface IImageCardProps {
  status: keyof typeof statuses;
  className?: string;
  iconLink: string;
}

export const ImageCard = ({
  className = '',
  status = 'default',
  iconLink,
}: IImageCardProps): React.ReactElement => {
  return (
    <div className={clsx(statuses[status], className, commonImageCardClass)}>
      <img src={iconLink} className='flex-1 self-stretch' alt=''></img>
      {status === 'correct' && (
        <img
          src='/images/icons/cards/correct.svg'
          className='absolute top-[10px] left-[10px]'
          alt=''
        ></img>
      )}
      {status === 'incorrect' && (
        <img
          src='/images/icons/cards/incorrect.svg'
          className='absolute top-[10px] left-[10px]'
          alt=''
        ></img>
      )}
      {status === 'disabled' && <div className={overlayClass}></div>}
    </div>
  );
};
