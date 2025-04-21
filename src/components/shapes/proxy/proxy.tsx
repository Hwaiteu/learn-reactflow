import { WrapperShape } from '../wrapper-shape/wrapper-shape';
import { Path } from './proxy.style';
import { useRef } from 'react';
import { useComputedSize } from '../../../hooks/useComputedSize';
import type { TNodeProps } from '../../../types';

export const Proxy = ({ data, id }: TNodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { height, width } = useComputedSize({ ref: rootRef });

  const cut = height * 0.5;

  const pathData = `
    M${cut} 0
    L${width - cut} 0
    L${width} 0
    L${width} ${height}
    L0 ${width}
    L0 ${height - cut}
    Z
  `;

  return (
    <WrapperShape data={data} id={id} ref={rootRef}>
      <Path d={pathData} />
    </WrapperShape>
  );
};
