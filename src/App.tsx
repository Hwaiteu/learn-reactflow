import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  Connection,
  Edge,
} from '@xyflow/react';
import styles from './app.module.scss';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import { Freeze, FreezePW } from './components/shapes';

const initialNodes = [
  {
    id: 'node-1',
    type: 'freeze',
    position: { x: 0, y: 0 },
    data: { label: 'freeze-node' },
  },
  {
    id: 'node-2',
    type: 'freeze-pw',
    position: { x: 300, y: 0 },
    data: { label: 'freeze-pw-node' },
  },
];

const initialEdges: Edge[] = [];

const nodeTypes = {
  freeze: Freeze,
  'freeze-pw': FreezePW,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge({ ...params, type: 'default' }, eds));
    },
    [setEdges]
  );

  return (
    <>
      <div className={styles.root}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
