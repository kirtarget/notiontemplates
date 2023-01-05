export type RichText = {
  type: "text" | "mention" | "equation";
  text: { content: string; link: string | null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color:
      | "default"
      | "gray"
      | "brown"
      | "orange"
      | "yellow"
      | "green"
      | "blue"
      | "purple"
      | "pink"
      | "red";
  };
  plain_text: string;
  href: string | null;
}[];

export function formatText(richText: RichText) {
  return richText.map((text) => {
    const {
      text: { content },
      annotations,
    } = text;

    if (annotations.bold) {
      return (
        <span key={Math.random()} className="font-bold">
          {content}
        </span>
      );
    }
    if (annotations.italic) {
      return (
        <span key={Math.random()} className="italic">
          {content}
        </span>
      );
    }
    if (annotations.underline) {
      return (
        <span key={Math.random()} className="underline">
          {content}
        </span>
      );
    }
    return content;
  }, "");
}
