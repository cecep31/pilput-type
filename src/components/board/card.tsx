import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: string;
  title: string;
  group: string;
}

const Card = ({ id, title }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {title: title},
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  function HandleClick() {
    alert(id);
  }

  return (
    <div
      onClick={HandleClick}
      className="w-60 px-2 py-2 bg-blue-400 text-gray-200 rounded-lg my-1"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {title}
    </div>
  );
};

export default Card;
