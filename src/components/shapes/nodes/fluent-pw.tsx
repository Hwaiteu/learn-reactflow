import { WrapperShape } from '../wrapper-shape/wrapper-shape';
import { Ellipse } from './nodes.style';
import { TNodeProps } from '../../../types';

export const FluentPW = ({ data, id }: TNodeProps) => {
  return (
    <WrapperShape data={data} id={id}>
      <Ellipse cx="0" cy="0" />
    </WrapperShape>
  );
};
