export interface SectionProps {
  children: React.ReactNode;
  style?: string;
}

export const Section = ({
  children,
  style = "py-8 bg-slate-100",
}: SectionProps) => <section className={style}>{children}</section>;
