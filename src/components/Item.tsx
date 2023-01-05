interface ItemProps {
  title: JSX.Element;
  description: JSX.Element;
  link: string;
  instruction: JSX.Element;
  cover: string;
}

const Item = ({ title, description, link, instruction, cover }: ItemProps) => {
  return (
    <div className="m-2 w-1/3 border border-gray-100 shadow-sm">
      <h1>{title ?? ""}</h1>
      {description ?? "Loading..."}
      {/* {instruction ?? "Loading..."} */}
      <img className="w-full" src={cover ?? ""} />
    </div>
  );
};

export default Item;
