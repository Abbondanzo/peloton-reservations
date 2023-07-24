import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks/useStore";
import { STUDIOS } from "../../class-list/constants/studios";
import { fetchClassList } from "../../class-list/slices/classListSlice";
import { StudioGroup } from "../../filters/components/StudioGroup";

interface Props {}

export const AlertEditor = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const [classId] = Object.entries(STUDIOS).find(
      ([_, value]) => value.location === "New York"
    )!;
    dispatch(fetchClassList(classId));
  }, [dispatch]);

  return (
    <form>
      <h2>Add an alert</h2>
      <p>Pick from the following settings and hit "Save" when you're done.</p>
      <StudioGroup />
    </form>
  );
};
