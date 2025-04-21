import { useEffect, useState } from 'react';

type SizeSVG = {
  width?: number;
  height?: number;
  ref: SVGTextElement | null;
  padding?: number;
};

type Size = {
  width: number;
  height: number;
};

export const useSizeSVG = ({ ref, height, width, padding = 20 }: SizeSVG) => {
  const [size, setSize] = useState<Size>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    if (!ref) {
      return;
    }

    const box = ref.getBBox();
    const computedWidth = width ?? Math.ceil(box.width);
    const computedHeight = height ?? Math.ceil(box.height);

    setSize({
      height: computedHeight % 2 ? computedHeight + 1 : computedHeight,
      width: computedWidth % 2 ? computedWidth + 1 : computedWidth,
    });
  }, [width, height, ref]);

  return {
    reactWidth: size.width + padding * 2,
    reactHeight: size.height + padding * 2,
  };
};
