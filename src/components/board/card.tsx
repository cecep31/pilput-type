import { useDraggable } from "@dnd-kit/core";

interface Card {
  id: string;
  title: string;
}

function Card({ card }: { card: Card }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const styles = {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="card"
      style={styles}
    >
      {card.title}
    </div>
  );
}

export default Card;
