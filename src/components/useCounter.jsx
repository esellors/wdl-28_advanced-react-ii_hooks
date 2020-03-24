import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, updateCount] = useState(initialValue);

  return [
    count,
    () => {
      updateCount(count + 1)
    }
  ]
}

export default useCounter;