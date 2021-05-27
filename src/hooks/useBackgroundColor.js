import { useEffect, useState } from 'react';

const useBackgroundColor = (initialColor = 'red') => {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = 'initial';
    };
  }, [color]);

  return setColor;
};

export default useBackgroundColor;
