export interface ColumnProps {
  content: React.ReactNode;
  image: React.ReactNode;
  position: string;
  style?: string;
}

export const Column = ({ content, image, position, style }: ColumnProps) => {
  // Render column layout.
  const renderColumnLayout = () => {
    if (position === "left") {
      return (
        <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-16 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-1/2 space-y-6">{content}</div>
          <div className="w-full lg:w-1/2 rounded-md">{image}</div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse space-x-0 lg:space-x-16 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-1/2 space-y-6">{content}</div>
          <div className="w-full lg:w-1/2 rounded-md">{image}</div>
        </div>
      );
    }
  };

  return (
    <section className={`${style}`}>
      <div className="items-center mx-auto max-w-7xl px-6">
        {renderColumnLayout()}
      </div>
    </section>
  );
};

export default Column;
