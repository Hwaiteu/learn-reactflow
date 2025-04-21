import { useRef } from 'react';
import { useComputedSize } from '../../../hooks/useComputedSize';
import { WrapperShape } from '../wrapper-shape/wrapper-shape';
import { Path } from './nodes.style';
import { TNodeProps } from '../../../types';

export const Delta = ({ id, data }: TNodeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { height, width } = useComputedSize({ ref: rootRef });
  const cut = height * 0.5;

  const pathData = `
      M${cut} 0
      L${width - cut} 0
      L${width} ${cut}
      L${width} ${height - cut}
      L${width - cut} ${height}
      L${cut} ${height}
      L0 ${height - cut}
      Z`;

  return (
    <WrapperShape data={data} id={id} ref={rootRef}>
      <Path d={pathData} />
    </WrapperShape>
  );
};
