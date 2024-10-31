// progress: max 100, min: 0

const ProgressBar = ({ progress = 30 }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className='w-full bg-gray-200 rounded-full overflow-hidden h-[13px]'>
      <div
        className='bg-sub-yellow-600 relative h-full rounded-full transition-all duration-300 ease-in-out'
        style={{ width: `${clampedProgress}%` }}
      >
        <div
          className='bg-white opacity-40 top-[3px] absolute rounded-full pt-[3px] mx-2 h-1'
          style={{ width: 'calc(100% - 18px)' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
