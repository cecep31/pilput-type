import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
} from "@dnd-kit/sortable";

import Card from "./card";

const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1,
};

export default function Container({ id, items }: { id: number; items: any[] }) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={String(id)}
      items={items}
      // strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((item) => (
          <Card key={item.id} id={item.id} />
        ))}
      </div>
    </SortableContext>
  );
}
