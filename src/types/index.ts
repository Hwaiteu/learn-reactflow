import { NodeProps } from '@xyflow/react';

export type TDataNodeProps = {
  label: string;
  width?: number;
  height?: number;
  color?: string;
};

export type TNodeProps = NodeProps & {
  data: NodeProps['data'] & TDataNodeProps;
};
