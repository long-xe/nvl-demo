// import { Button } from "../../components/Button";
import { IconButton } from '../../components/IconButton';
import ProgressBar from '../../components/ProgressBar';

export default function Page1() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <IconButton
          variant='colored'
          disabled={true}
          iconLink='/images/icons/arrow-left.svg'
        >
          Icon
        </IconButton>
        <ProgressBar />
        <p className='text-red-400 '>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
