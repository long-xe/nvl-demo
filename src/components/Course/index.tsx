import clsx from 'clsx';
import { Tag } from '../Tag';
import { LevelCourse } from '../LevelCourse';
import * as React from 'react';
import ProgressBar from '../ProgressBar';

const levelVariants = {
  intermediate: 'intermediate',
  beginner: 'beginner',
  advance: 'advance',
};

interface ICourseProps {
  courseImage: string;
  courseName: string;
  subText?: string;
  expAmount?: number;
  avatar?: string;
  className?: string;
  levelVariant: keyof typeof levelVariants;
  completeProcess?: number;
  isHasVideo?: boolean;
}

const displayName = (key: string) => {
  switch (key) {
    case levelVariants.intermediate:
      return 'Intermediate';
    case levelVariants.advance:
      return 'Advance';
    case levelVariants.beginner:
      return 'Beginner';
    default:
      return '';
  }
};

export const Course = ({
  courseImage,
  courseName,
  subText = '',
  expAmount = 0,
  avatar = '',
  className = '',
  levelVariant,
  completeProcess,
  isHasVideo = false,
}: ICourseProps): React.ReactElement => {
  return (
    <div
      className={clsx(className, 'group flex flex-col aspect-square relative')}
    >
      <div className='relative inline-flex justify-center'>
        <img
          className='rounded-lg w-full aspect-video'
          src={courseImage}
          alt=''
        />
        {isHasVideo && (
          <>
            <div className='absolute w-full h-full bg-black bg-opacity-20 rounded-lg'></div>
            <img
              className='absolute w-1/4 rounded-full -translate-x-2/4 -translate-y-2/4 left-1/2 top-1/2'
              src='/images/icons/common/preview-play.svg'
              alt=''
            />
          </>
        )}
        <LevelCourse
          variant={levelVariant}
          content={displayName(levelVariant)}
          className='absolute top-2 left-2'
        />
        {completeProcess !== undefined && (
          <div className='absolute w-[95%] bottom-0'>
            <ProgressBar progress={completeProcess} />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-2.5 pt-4 pb-4 pl-1 pr-1 rounded-t-lg border-t-0 border-l-0 border-r-0 border-gray-200'>
        <div className='flex gap-2 w-full justify-between'>
          <div className='flex flex-col gap-1'>
            <div className='text-[#202039] text-start title-1'>
              {courseName}
            </div>
            <div className='text-[#727393] text-start caption-1'>{subText}</div>
          </div>
          {avatar && (
            <img className='w-9 h-9 rounded-full' src={avatar} alt='' />
          )}
        </div>
        {!!expAmount && (
          <Tag className='w-fit gap-[6px]' variant='colored'>
            <img src='/images/icons/common/star-icon.svg' alt='' />
            <span className='pt-1'>{expAmount} xp</span>
          </Tag>
        )}
      </div>
      <div
        className='group-hover:block hidden'
        style={{
          width: '110%',
          height: '110%',
          position: 'absolute',
          top: '-14px',
          left: '-12px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px',
            position: 'absolute',
            background:
              'linear-gradient(180deg, rgba(118.41, 211.44, 200.55, 0.20) 0%, rgba(118, 211, 201, 0.01) 61%, rgba(118, 211, 201, 0.12) 100%)',
            border: '1px #00DEC4 solid',
          }}
        />
        <div
          style={{
            width: '24.30px',
            height: '26px',
            left: '0px',
            top: '0px',
            position: 'absolute',
          }}
        >
          <img src='/images/icons/common/up-frame.svg' alt='' />
        </div>
        <div
          style={{
            position: 'absolute',
            width: '24.30px',
            height: '26px',
            bottom: 0,
            right: 0,
          }}
        >
          <img src='/images/icons/common/down-frame.svg' alt='' />
        </div>
      </div>
    </div>
  );
};
