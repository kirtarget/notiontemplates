interface EmbedYouTubeProps {
  videoId: string;
}

const EmbedYouTube = ({ videoId }: EmbedYouTubeProps) => {
  return (
    <iframe
      className="mx-auto	mb-4 aspect-video w-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default EmbedYouTube;
