import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";

interface Card {
  id: string;
  title: string;
}

interface Group {
  id: string;
  title: string;
  cards: Card[];
}

function Board() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: "1",
      title: "Group 1",
      cards: [
        { id: "1", title: "Card 1" },
        { id: "2", title: "Card 2" },
        { id: "3", title: "Card 3" },
      ],
    },
    {
      id: "2",
      title: "Group 2",
      cards: [
        { id: "3", title: "Card 3" },
        { id: "4", title: "Card 4" },
      ],
    },
  ]);

  return (
    <div className="board">
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </div>
  );
}

function Group({ group }: { group: Group }) {
  return (
    <div className="group">
      <h2>{group.title}</h2>
      <SortableContext
        items={group.cards.map((card) => card.id)}
      >
        {group.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </SortableContext>
    </div>
  );
}

function Card({ card }: { card: Card }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="card"
    >
      {card.title}
    </div>
  );
}

function dnd() {
  return (
    <DndContext>
      <Board />
    </DndContext>
  );
}
export default dnd;
