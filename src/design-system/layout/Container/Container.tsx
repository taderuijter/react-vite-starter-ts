export interface ContainerTypes {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerTypes) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);
