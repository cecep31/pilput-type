import Board from "./board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const BoardPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        <Board />
      </div>
    </DndProvider>
  );
};

export default BoardPage;
