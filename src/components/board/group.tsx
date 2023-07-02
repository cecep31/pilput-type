import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import Card from "./card";

interface Card {
  id: string;
  title: string;
}
interface Group {
  id: string;
  title: string;
  cards: any[];
}
function Group({ group }: { group: Group }) {
  return (
    <div className="group">
      <h2>{group.title}</h2>
      <SortableContext
        items={group.cards.map((card) => card.id)}
        strategy={sortableKeyboardCoordinates}
      >
        {group.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </SortableContext>
    </div>
  );
}
export default Group;
