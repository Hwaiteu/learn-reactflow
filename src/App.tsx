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
import { Freeze, FreezePW, Fluent, FluentPW, FreezeAOF, Delta, Proxy, Signal } from './components/shapes';

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
  {
    id: 'node-3',
    type: 'freeze-aof',
    position: { x: 400, y: 0 },
    data: { label: 'freeze-AOF-node' },
  },
  {
    id: 'node-4',
    type: 'fluent',
    position: { x: 400, y: 100 },
    data: { label: 'fluent-node' },
  },
  {
    id: 'node-5',
    type: 'fluent-pw',
    position: { x: 400, y: 400 },
    data: { label: 'fluent-pw-node' },
  },
  {
    id: 'node-6',
    type: 'delta',
    position: { x: 500, y: 500 },
    data: { label: 'delta-node' },
  },
  {
    id: 'proxy',
    type: 'proxy',
    position: { x: 450, y: 300 },
    data: { label: 'proxy  adsadssada ' },
  },

  {
    id: 'signal',
    type: 'signal',
    position: { x: 350, y: 300 },
    data: { label: 'signal dasdasd asdas' },
  },
];

const initialEdges: Edge[] = [];

const nodeTypes = {
  freeze: Freeze,
  'freeze-pw': FreezePW,
  'freeze-aof': FreezeAOF,
  fluent: Fluent,
  'fluent-pw': FluentPW,
  delta: Delta,
  proxy: Proxy,
  signal: Signal,
};

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
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
