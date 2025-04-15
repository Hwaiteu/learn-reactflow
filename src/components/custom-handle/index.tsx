import { Handle, Position } from '@xyflow/react';

type Props = {
  position: Position;
  id: string;
  style?: Record<string, unknown>;
};

export const CustomHandle = ({ id, position, style }: Props) => {
  return (
    <>
      <Handle type="source" position={position} id={`${id}-${position}-source`} style={style} />
      <Handle type="target" position={position} id={`${id}-${position}-target`} style={style} />
    </>
  );
};
