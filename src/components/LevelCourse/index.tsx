import clsx from 'clsx';
import * as React from 'react';

const variants = {
  intermediate: 'bg-gradient-to-r from-[#02A08E] to-[#FF3053]',
  beginner: 'bg-gradient-to-r from-[#2740B0] to-[#60B7FF]',
  advance: 'bg-gradient-to-r from-[#FF3053] to-[#F4B40F]',
};

const paddingTypes = {
  hasText: 'px-2 py-1',
  noText: 'p-1',
};

const commonClass = 'flex items-center justify-center rounded-lg';

const displayIcon = (variant: string) => {
  switch (variant) {
    case 'intermediate':
      return '/images/icons/common/intermediate-badge.svg';
    case 'beginner':
      return '/images/icons/common/beginner-badge.svg';
    case 'advance':
      return '/images/icons/common/advance-badge.svg';
    default:
      return '';
  }
};

interface ILevelCourseProps {
  variant: keyof typeof variants;
  className?: string;
  content?: string;
}

export const LevelCourse = ({
  className = '',
  variant,
  content = '',
}: ILevelCourseProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        variants[variant],
        className,
        commonClass,
        content != '' ? paddingTypes.hasText : paddingTypes.noText,
      )}
    >
      <img src={displayIcon(variant)} alt='' />
      {content && (
        <p className='number-sm text-white pl-1 break-words'>{content}</p>
      )}
    </div>
  );
};
