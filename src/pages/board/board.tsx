import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
  const [groups, setGroups] = useState([
    {
      id: "1",
      title: "Group 1",
      cards: [
        { id: "1", title: "Card 1", group: "Group 1" },
        { id: "2", title: "Card 2", group: "Group 1" },
      ],
    },
    {
      id: "2",
      title: "Group 2",
      cards: [
        { id: "3", title: "Card 3", group: "Group 2" },
        { id: "4", title: "Card 4", group: "Group 2" },
      ],
    },
  ]);

  const moveCard = (cardId: string, targetGroupId: string) => {
    setGroups((prevGroups) => {
      const updatedGroups = [...prevGroups];

      const cardGroupIndex = updatedGroups.findIndex((group) =>
        group.cards.find((card) => card.id === cardId)
      );

      if (cardGroupIndex !== -1) {
        const cardIndex = updatedGroups[cardGroupIndex].cards.findIndex(
          (card) => card.id === cardId
        );

        if (cardIndex !== -1) {
          const movedCard = updatedGroups[cardGroupIndex].cards.splice(
            cardIndex,
            1
          )[0];

          const targetGroupIndex = updatedGroups.findIndex(
            (group) => group.id === targetGroupId
          );

          if (targetGroupIndex !== -1) {
            movedCard.group = targetGroupId;
            updatedGroups[targetGroupIndex].cards.push(movedCard);
          }
        }
      }

      return updatedGroups;
    });
    console.log(groups);

  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board flex space-x-2">
        {groups.map((group, index) => (
          <Group
            key={index}
            id={group.id}
            title={group.title}
            cards={group.cards}
            moveCard={moveCard}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Board;