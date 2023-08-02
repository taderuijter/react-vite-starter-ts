export interface ContainerProps {
  children: React.ReactNode;
  style?: string;
}

export const Container = ({
  children,
  style = "px-4 sm:px-6 lg:px-8",
}: ContainerProps) => (
  <div className={`mx-auto max-w-7xl ${style}`}>{children}</div>
);
