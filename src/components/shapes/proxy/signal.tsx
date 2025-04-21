import { useRef } from 'react';
import { useComputedSize } from '../../../hooks/useComputedSize';
import { WrapperShape } from '../wrapper-shape/wrapper-shape';
import { Path } from './proxy.style';
import type { TNodeProps } from '../../../types';

export const Signal = ({ data, id }: TNodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { height, width } = useComputedSize({ ref: rootRef });

  const cut = height * 0.5;

  const pathData = `
      M0 0
      L${width - cut} 0
      L${width} ${height - cut}
      L${width - cut} ${height}
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
