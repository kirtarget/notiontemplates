/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import EmbedYouTube from "./EmbedYouTube";

interface MyModalProps {
  instruction: string;
  cover: string;
  description: string;
  link: string;
  instructionId: string;
  title: string;
}

const MyModal = ({
  instruction,
  cover,
  description,
  link,
  instructionId,
  title,
}: MyModalProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={`my-modal-${instructionId}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>

          {instruction ? (
            <EmbedYouTube videoId={instructionId} />
          ) : (
            <img src={cover} alt={title} />
          )}

          <p className="py-4">{description}</p>
          <div className="modal-action">
            <Link href={link}>
              <label className="btn-primary btn">Получить</label>
            </Link>
            <label htmlFor={`my-modal-${instructionId}`} className="btn ">
              Закрыть
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
