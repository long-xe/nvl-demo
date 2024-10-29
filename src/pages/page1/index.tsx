import { useState } from 'react';
import { Button } from '@mantine/core';

export default function Page1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='m-10'>Vite + React</h1>
      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)} variant='filled'>
          count is {count}
        </Button>
        <p className='text-neutral-50'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
