import { useEffect, useState } from "react";
import { STUDIOS } from "../../class-list/constants/studios";
import { fetchClassList } from "../../class-list/slices/classListSlice";
import { StudioGroup } from "../../filters/components/StudioGroup";
import { useAppDispatch } from "../../store/hooks/useStore";
import { Padding } from "../../theme/components/Padding";
import { SectionTitle } from "../../theme/components/SectionTitle";
import { InstructorsPicker } from "./editor/InstructorsPicker";
import { DisciplinesPicker } from "./editor/DisciplinesPicker";

export const AlertEditor = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const [classId] = Object.entries(STUDIOS).find(
      ([_, value]) => value.location === "New York"
    )!;
    dispatch(fetchClassList(classId));
  }, [dispatch]);

  const [selectedInstructors, setSelectedInstructors] = useState<
    string[] | null
  >([]);
  const [selectedDisciplines, setSelectedDisciplines] = useState<
    string[] | null
  >(null);

  return (
    <form>
      <h2>Add an alert</h2>
      <p>Pick from the following settings and hit "Save" when you're done.</p>
      <StudioGroup />
      <Padding>
        <SectionTitle>Instructors</SectionTitle>
        <InstructorsPicker
          selectedInstructors={selectedInstructors}
          setSelectedInstructors={setSelectedInstructors}
        />
      </Padding>
      <Padding>
        <SectionTitle>Disciplines</SectionTitle>
        <DisciplinesPicker
          selectedDisciplines={selectedDisciplines}
          setSelectedDisciplines={setSelectedDisciplines}
        />
      </Padding>
    </form>
  );
};
