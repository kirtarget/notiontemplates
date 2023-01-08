/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import EmbedYouTube from "./EmbedYouTube";

interface ItemProps {
  title: string;
  description: string;
  link: string;
  instruction: string;
  cover: string;
}

const Item = ({ title, description, cover, link, instruction }: ItemProps) => {
  const instructionId: string | undefined = instruction.split("/").at(-1) ?? "";
  console.log(instructionId);
  return (
    <>
      <div className="card m-4 w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title ?? ""}</h2>
          <p>{description ?? "Loading..."}</p>
          <label htmlFor="my-modal-5" className="btn-primary btn-xs btn w-24">
            Подробнее
          </label>
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

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>

          <EmbedYouTube videoId={instructionId} />

          <p className="py-4">{description}</p>
          <div className="modal-action">
            <label className="btn-primary btn">
              <Link href={link}>Получить</Link>
            </label>
            <label htmlFor="my-modal-5" className="btn ">
              Закрыть
            </label>
          </div>
        </div>
      </div>
    </>

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
