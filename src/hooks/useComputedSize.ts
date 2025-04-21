import { RefObject, useEffect, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

type Props = {
  ref: RefObject<HTMLDivElement | null>;
};

export const useComputedSize = ({ ref }: Props): Size => {
  const [size, setSize] = useState<Size>({ height: 0, width: 0 });

  useEffect(() => {
    const current = ref.current;
    if (!current) {
      return;
    }

    const updateSize = () => {
      const { clientWidth, clientHeight } = current;
      setSize({
        width: clientWidth,
        height: clientHeight,
      });
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(current);

    updateSize();

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return size;
};
