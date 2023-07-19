import { ReactNode, useEffect, useRef } from "react";
import { findDOMNode } from "react-dom";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.mainSurface};
  color: ${(props) => props.theme.colors.main};
  border-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
  padding: 0.75em;
  right: 0;
  left: 0;
  top: 100%;
`;

export const Popover = ({ children, open, onClose }: Props) => {
  const lastOpened = useRef<number>();
  useEffect(() => {
    if (open) {
      lastOpened.current = new Date().getTime();
    }
  }, [open]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const hasEnoughDelay =
        lastOpened.current && lastOpened.current + 100 < new Date().getTime();
      if (!hasEnoughDelay) {
        return;
      }
      const el = event.target;
      if (!(el instanceof Node)) {
        onClose();
        return;
      }
      const domNode = findDOMNode(ref.current);
      if (domNode && domNode instanceof Node && domNode.contains(el)) {
        return;
      }
      onClose();
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [open, onClose]);
  if (!open) return null;
  return <Wrapper ref={ref}>{children}</Wrapper>;
};
