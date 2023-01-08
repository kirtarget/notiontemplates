import Image from "next/image";

interface ItemProps {
  title: string;
  description: string;
  link: string;
  instruction: string;
  cover: string;
}

const Item = ({ title, description, cover }: ItemProps) => {
  return (
    <div className="card m-4 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title ?? ""}</h2>
        <p>{description ?? "Loading..."}</p>
      </div>
      <figure>
        <img
          //   width={5000}
          //   height={5000}
          src={cover ?? ""}
          alt="Notion"
          className="w-full"
        />
      </figure>
    </div>

    // <div className="m-2 w-1/3 border border-gray-100 shadow-sm">
    //   <h1>{title ?? ""}</h1>
    //   {description ?? "Loading..."}
    //   {/* {instruction ?? "Loading..."} */}
    //   <img className="w-full" src={cover ?? ""} />
    //   <button className="btn-primary btn">Скачать</button>
    // </div>
  );
};

export default Item;
