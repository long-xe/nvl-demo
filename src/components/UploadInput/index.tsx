import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import { Button } from '../Button';

interface IUploadInputProps {
  error: boolean;
  onChange: () => void;
}

const UploadInput = (props: IUploadInputProps) => {
  const { error, onChange } = props;

  const [progress, setProgress] = useState(0);
  const [isUpload, setIsUpload] = useState(false);
  const [file, setFile] = useState({
    path: '',
    data: '',
  });

  function handleEvent(event: ProgressEvent) {
    console.log('event', event);
    const percent = (event.loaded / event.total) * 100;
    setProgress(percent);
  }

  const addListeners = (reader: FileReader) => {
    reader.addEventListener('progress', handleEvent, false);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUpload(true);
    if (!event.target.files || !event.target.files[0]) {
      return;
    }

    const fileReader = new FileReader();
    addListeners(fileReader);
    fileReader.onload = () => {
      if (fileReader.readyState === FileReader.DONE) {
        // logic run here
        setProgress(0);
        setIsUpload(false);
        const result = fileReader.result;
        if (typeof result === 'string') {
          setFile({
            data: result,
            path: event.target.value.split('\\').pop() ?? '',
          });
          // Handle the base64 string result
          // For example: setFileData(result);
        }
      }
    };
    fileReader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div
      className={`rounded-2xl max-w-[268px] h-[284px] border-2 ${error ? 'border-sub-red-300 bg-neutral-0' : 'border-dashed border-neutral-30 bg-neutral-10'}  p-3`}
    >
      <div className='flex flex-col gap-4 h-full'>
        <div className='grow flex flex-col justify-end'>
          {error ? (
            <>
              <p className='body-2 text-sub-red-300'>Oops, it’s too big</p>
              <p className='body-2 text-sub-red-300'>
                Choose other file please!
              </p>
            </>
          ) : !file.data ? (
            <p className='body-2'>Maximum size is 1 GB</p>
          ) : (
            <>
              <p>{file.path}</p>
              <div id='img-wrapper'>
                <img src={file.data} alt='' />
              </div>
            </>
          )}
        </div>
        <div className='mb-[88px]'>
          {isUpload && <ProgressBar progress={progress} />}

          <input
            id='file-upload'
            type='file'
            // accept='.png, .jpeg, .jpg'
            style={{ display: 'none' }}
            onClick={(e) => {
              e.currentTarget.value = '';
            }}
            onChange={handleUpload}
          />
          <Button
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            Choose file
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadInput;
