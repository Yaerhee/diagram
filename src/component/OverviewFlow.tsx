import React, { useCallback } from 'react'
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
} from 'reactflow'

import {
  nodes as initialNodes,
  edges as initialEdges,
} from '../diagrams/initial-elements'
import AnnotationNode from '../diagrams/AnnotationNode'
import ToolbarNode from '../diagrams/ToolbarNode'
import ResizerNode from '../diagrams/ResizerNode'
import CircleNode from '../diagrams/CircleNode'
import TextNode from '../diagrams/TextNode'
import ButtonEdge from '../diagrams/ButtonEdge'

import 'reactflow/dist/style.css'
import '../css/overview.css'
import { Flex } from '@chakra-ui/react'
import Themes from './Themes'

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextNode,
}

const edgeTypes = {
  button: ButtonEdge,
}

const nodeClassName = (node: { type: any }) => node.type

const OverviewFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes as any)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [],
  )

  return (
    <Flex w="full" h="full">
      <Flex w="80%">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes as any}
          className="overview"
        >
          <MiniMap zoomable pannable nodeClassName={nodeClassName as any} />
          <Controls />
          <Background />
        </ReactFlow>
      </Flex>
      <Themes />
    </Flex>
  )
}

export default OverviewFlow
