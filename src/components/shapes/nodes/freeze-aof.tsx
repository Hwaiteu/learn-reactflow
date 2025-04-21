import { WrapperShape } from '../wrapper-shape/wrapper-shape';
import { Rect } from './nodes.style';
import type { TNodeProps } from '../../../types';

export const FreezeAOF = ({ data, id }: TNodeProps) => {
  return (
    <WrapperShape data={data} id={id}>
      <Rect x="0" y="0" ry="16" rx="16" />
    </WrapperShape>
  );
};
