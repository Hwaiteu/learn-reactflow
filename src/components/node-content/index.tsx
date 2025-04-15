import type { NodeProps } from '@xyflow/react';
import type { ReactNode } from 'react';

type Props = {
  data: NodeProps['data'];
  children?: ReactNode;
};

export const NodeContent = ({ data, children }: Props) => {
  return (
    <>
      <div>
        <h3>{String(data.label)}</h3>
      </div>
      <div>{typeof data.description === 'string' && <p>{String(data.description)}</p>}</div>
      <div>{children}</div>
    </>
  );
};
