import type { TNodeProps } from '../../../types';
import { WrapperShape } from '../wrapper-shape/wrapper-shape';
import { Rect } from './nodes.style';

export const Freeze = ({ data, id }: TNodeProps) => {
  return (
    <WrapperShape data={data} id={id}>
      <Rect x="0" y="0" fill={data.color} />
    </WrapperShape>
  );
};
