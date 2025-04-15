import { Position } from '@xyflow/react';
import { CustomHandle } from '../custom-handle';

type Props = {
  id: string;
  style?: Record<string, unknown>;
};

export const HandleAll = ({ id, style }: Props) => {
  return (
    <>
      <CustomHandle id={id} position={Position.Top} style={style} />
      <CustomHandle id={id} position={Position.Bottom} style={style} />
      <CustomHandle id={id} position={Position.Right} style={style} />
      <CustomHandle id={id} position={Position.Left} style={style} />
    </>
  );
};
