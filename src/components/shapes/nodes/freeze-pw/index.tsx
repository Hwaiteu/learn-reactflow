import { type NodeProps } from '@xyflow/react';
import styles from './index.module.scss';
import { HandleAll } from '../../../handle-all';
import { NodeContent } from '../../../node-content';

export const FreezePW = ({ data, id }: NodeProps) => {
  return (
    <div className={styles.nodeContainer}>
      <HandleAll id={id} style={{ zIndex: 2 }} />
      <div className={styles.octagonShape}>
        <NodeContent data={data} />
      </div>
    </div>
  );
};
