import { type ReactNode, useCallback, useEffect, useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  useEffect(() => {
    if (!open) return;
    const handler = (event: MouseEvent) => {
      const el = event.target;
      if (!(el instanceof Node)) {
        onClose();
        return;
      }
      const domNode = ref.current;
      if (domNode && domNode.contains(el)) {
        return;
      }
      onClose();
    };
    // Use capture phase with a timeout to avoid closing immediately on the opening click
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handler, true);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handler, true);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Wrapper ref={ref} role="dialog" aria-modal="true">
      {children}
    </Wrapper>
  );
};
