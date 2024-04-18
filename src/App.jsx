import { useState } from "react";

import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addNewNodeHandler = () => {
    const node = {
      id: (nodes.length + 1).toString(),
      position: { x: nodes.length * 4, y: nodes.length * 4 },
      data: { label: `${nodes.length + 1}` },
    };
    setNodes((prev) => [...prev, node]);
    console.log(`nodes are ${JSON.stringify(nodes)}`);
  };

  return (
    <div>
      <Sidebar addNewNodeHandler={addNewNodeHandler} />
      <Home
        nodes={nodes}
        edges={edges}
        setNodes={setNodes}
        setEdges={setEdges}
      />
    </div>
  );
};

export default App;
