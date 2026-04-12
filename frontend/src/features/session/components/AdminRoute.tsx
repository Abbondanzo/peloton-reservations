import { type ReactNode } from "react";
import { Navigate } from "react-router";
import { Paths } from "../../navigation/constants/paths";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectIsAdmin } from "../selectors/selectIsAdmin";
import { selectSession } from "../selectors/selectSession";

interface Props {
  children: ReactNode;
}

export const AdminRoute = ({ children }: Props) => {
  const session = useAppSelector(selectSession);
  const isAdmin = useAppSelector(selectIsAdmin);

  if (session.state !== "fulfilled") return null;
  if (!isAdmin) return <Navigate to={Paths.CLASS_LIST} replace />;
  return <>{children}</>;
};
