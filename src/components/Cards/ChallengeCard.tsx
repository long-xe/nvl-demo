import clsx from 'clsx';
import * as React from 'react';

interface IChallengeCardProps {
  imageLink: string;
  avatarLink: string;
  className?: string;
  likeNumber: number;
  postedDate: string;
}

export const ChallengeCard = ({
  imageLink,
  likeNumber,
  postedDate,
  className = '',
  avatarLink = '',
}: IChallengeCardProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        'flex justify-center items-center hover:bg-gradient-1 bg-neutral-10 p-[2px] rounded-2xl cursor-pointer',
        className,
      )}
    >
      <div className='flex flex-col w-full gap-3 p-3 hover:bg-primary-100 bg-neutral-0 rounded-2xl'>
        <div className='inline-flex p-[5px] bg-neutral-10 border-[3px] border-neutral-30 rounded-[20px] items-center shadow-[0px_2px_0px_0px_#D2D2D2]'>
          <img
            className='rounded-[20px] w-full aspect-square'
            src={imageLink}
            alt=''
          />
        </div>
        <div className='inline-flex px-1 justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center w-5 h-5'>
                <img src='/images/icons/common/heart-icon.svg' alt='' />
              </div>
              <div className='body-2 text-neutral-60'>{likeNumber} likes</div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='relative w-5 h-5'>
                <img src='/images/icons/common/watch-icon.svg' alt='' />
              </div>
              <div className='body-2 text-neutral-60'>{postedDate}</div>
            </div>
          </div>
          <img className='w-9 h-9 rounded-full' src={avatarLink} alt='' />
        </div>
      </div>
    </div>
  );
};
