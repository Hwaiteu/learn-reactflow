import { type NodeProps } from '@xyflow/react';
import styles from './index.module.scss';
import { HandleAll } from '../../../handle-all';

export const Freeze = ({ data, id }: NodeProps) => {
  return (
    <div className={styles.root} style={{ position: 'relative', padding: '20px' }}>
      <HandleAll id={id} />
      <div className={styles.header}>
        <h3>{String(data.label)}</h3>
      </div>
      <div className={styles.body}>{typeof data.description === 'string' && <p>{String(data.description)}</p>}</div>
    </div>
  );
};
