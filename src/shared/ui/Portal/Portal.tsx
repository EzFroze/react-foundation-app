import { type FC } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  to?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({ children, to = document.body }) => {
  return createPortal(children, to);
};
