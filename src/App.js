import Calculator from "./components/calculator/Calculator.js";
import FileTree from "./components/fileTree/fileTree.js";
import './App.css';

function App() {
  const root = {
    name: "My workspace",
    type: "dir",
    children: [
      {
        name: "Design projects",
        type: "dir",
        children: [
          {
            name: "App Redesign",
            type: "file",
          },
        ],
      },
      {
        name: "Development",
        type: "dir",
        children: [
          {
            name: "Frontend Tasks",
            type: "file",
          },
        ],
      },
      {
        name: "Marketing",
        type: "file",
      },
      {
        name: "Sales pitch",
        type: "file",
      },
    ],
  };

  return (
    <div className="App">
      {/* <Calculator /> */}
      <FileTree root={root} />
    </div>
  );
}

export default App;
