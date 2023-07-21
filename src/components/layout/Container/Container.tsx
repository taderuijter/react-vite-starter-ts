export interface ContainerProps {
  children: React.ReactNode;
  style?: string;
}

export const Container = ({ children, style }: ContainerProps) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${style}`}>
    {children}
  </div>
);
