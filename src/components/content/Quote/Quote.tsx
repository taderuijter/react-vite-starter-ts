export interface QuoteProps {
  text: string;
  author?: string;
  style?: string;
}

export const Quote = ({
  text,
  style = "border-slate-400",
  author,
}: QuoteProps) => (
  <blockquote
    className={`relative pl-5 mt-8 border-l-4 text-xl font-light italic ${style}`}>
    {text}
    {author && <div className="text-sm mt-4">- {author}</div>}
  </blockquote>
);
