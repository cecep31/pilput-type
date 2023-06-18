import { useDrag } from "react-dnd";

interface Props {
  id: string;
  title: string;
  group: string;
}

const Card = ({ id, title }: Props) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "CARD",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  function HandleClick() {
    alert(id)
  }

  return isDragging ? (
    <div ref={dragPreview} className="w-60 h-14"></div>
  ) : (
    <div
      onClick={HandleClick}
      className="w-60"
      ref={drag}
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      {id}
      {title}
    </div>
  );
};

export default Card;
