import { useEffect, useState, ReactNode, FC } from "react";
import ReactDOM from "react-dom";

export const usePortal = (id: string) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalRoot = document.getElementById(id);
    const el = document.createElement("div");

    if (!portalRoot) {
      const newPortalRoot = document.createElement("div");
      newPortalRoot.setAttribute("id", id);
      document.body.appendChild(newPortalRoot);
    }

    document.getElementById(id)?.appendChild(el);
    setTarget(el);

    return () => {
      document.getElementById(id)?.removeChild(el);
    };
  }, [id]);

  const Portal: FC<{ children: ReactNode }> = ({ children }) => {
    if (!target) return null;
    return ReactDOM.createPortal(children, target);
  };

  return Portal;
};
