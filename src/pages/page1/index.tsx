import { useState } from "react";
// import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";

export default function Page1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        {/* <Button
          variant="primary"
          size="md"
          paddingType="md"
          gradientType="none"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button> */}
        <IconButton variant='colored' disabled={true} iconLink='/images/icons/arrow-left.svg'>
          Icon
        </IconButton>
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
