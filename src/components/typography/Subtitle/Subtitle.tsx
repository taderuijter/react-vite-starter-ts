export interface SubtitleProps {
  children: React.ReactNode;
  style?: string;
}

export const Subtitle = ({
  children,
  style = "text-slate-400",
}: SubtitleProps) => (
  <div className={`text-sm uppercase font-medium tracking-[4px] ${style}`}>
    {children}
  </div>
);
