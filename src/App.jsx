import { useState } from "react";

import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);



  const addNewNodeHandler = (type) => {
    const node = {
      id: (nodes.length + 1).toString(),
      type: type,
      position: { x: nodes.length * 4, y: nodes.length * 4 },
      data: { label: `${nodes.length + 1}` },
    };
    setNodes((prev) => [...prev, node]);
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
