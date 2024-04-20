import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

import "reactflow/dist/style.css";
import styles from "./Home.module.css";

const customNodeTypes = {
  circle: ({ id, data }) => (
    <div
      id={id}
      className="custom-node"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "indianred",
        color: "#fff",
        textAlign: "center",
        lineHeight: "50px",
      }}
      onContextMenu={(event) => event.preventDefault()} // Prevent default context menu to enable edge creation
    >
      {data.label}
    </div>
  ),
  rectangle: ({ id, data }) => (
    <div
      id={id}
      className="custom-node"
      style={{
        width: "60px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: "teal",
        color: "#fff",
        textAlign: "center",
        lineHeight: "30px",
      }}
    >
      {data.label}
    </div>
  ),
};

const Home = (props) => {
  const nodes = props.nodes,
    edges = props.edges,
    setEdges = props.setEdges,
    setNodes = props.setNodes;

    const addEdgeBetweenNodes = (sourceId, targetId) => {
        const newEdge = {
          id: `${sourceId}-${targetId}`,
          source: sourceId,
          target: targetId,
          animated: true
        };
        // setElements((els) => addEdge(newEdge, els));
        setEdges(els => addEdge(newEdge, els));
      };

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

const onConnect = (params) => {
    const { source, target } = params;
    if (source && target) {
      addEdgeBetweenNodes(source, target);
    }
  };

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div className={styles.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={customNodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
export default Home;
