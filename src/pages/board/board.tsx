import { DndContext, DragEndEvent } from "@dnd-kit/core";
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

  const moveCard = (cardId: number, targetGroupId: number) => {
    setGroups((prevGroups) => {
      // Membuat salinan baru dari array groups
      const updatedGroups = [...prevGroups];

      // Mencari grup sumber dan kartu yang akan dipindahkan
      const sourceGroupIndex = updatedGroups.findIndex((group) =>
        group.cards.some((card) => card.id === cardId)
      );
      const targetGroupIndex = updatedGroups.findIndex(
        (group) => group.id === targetGroupId
      );
      const cardIndex = updatedGroups[sourceGroupIndex].cards.findIndex(
        (card) => card.id === cardId
      );

      // Memeriksa apakah grup sumber dan kartu ditemukan
      if (sourceGroupIndex !== -1 && cardIndex !== -1) {
        // Mengambil kartu dari grup sumber
        const [card] = updatedGroups[sourceGroupIndex].cards.splice(
          cardIndex,
          1
        );

        // Menambahkan kartu ke grup tujuan
        updatedGroups[targetGroupIndex].cards.push(card);
      }

      return updatedGroups;
    });
  };

  // function handledrop(e: DragEndEvent) {
  //   const { active, over } = e;
  //   const cardid = Number(active.id);
  //   const groupid = Number(over?.id);
  //   if (groupid) {
  //     moveCard(cardid, groupid);
  //   }
  // }

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
