import { DndContext } from "@dnd-kit/core";
import Group from "../../components/board/group";
import { useState } from "react";

interface Group {
  id: string;
  title: string;
  cards: Card[];
}

interface Card {
  id: string;
  title: string;
  group: string;
}

const Board = () => {
  const [groups] = useState([
    {
      id: 1,
      title: "Group 1",
      cards: [
        { id: 1, title: "Card 1", group: "Group 1" },
        { id: 2, title: "Card 2", group: "Group 1" },
      ],
    },
    {
      id: 2,
      title: "Group 2",
      cards: [
        { id: 3, title: "Card 3", group: "Group 2" },
        { id: 4, title: "Card 4", group: "Group 2" },
      ],
    },
    {
      id: 3,
      title: "Group 3",
      cards: [
        { id: 5, title: "Card 3", group: "Group 2" },
        { id: 6, title: "Card 4", group: "Group 2" },
      ],
    },
  ]);

  

  return (
    <DndContext >
      <div className="board flex space-x-2">
        {groups.map((group, index) => (
          <Group key={index} id={group.id} items={group.cards} />
        ))}
      </div>
    </DndContext>
  );
};

export default Board;
