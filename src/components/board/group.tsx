
import Card from "./card";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  id: string;
  title: string;
  cards: any[];
  moveCard: (cardid: string, groupid: string) => void;
}

const Group = ({ id, title, cards, moveCard }: Props) => {
  const {setNodeRef} = useDroppable({
    id: id,
  });

  

  return (
    <div
      ref={setNodeRef}
      className={`group w-64 flex flex-col `}
    >
      <div className="px-2 py-2 text-center flex justify-between">
        <div></div>
        <div>{title}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </div>
      {cards.map((card, index) => (
        <Card id={card.id} group={title} key={index} title={card.title} />
      ))}
    </div>
  );
};

export default Group;