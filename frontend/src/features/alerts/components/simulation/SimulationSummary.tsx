import styled from "styled-components";

const Strip = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  flex-wrap: wrap;
`;

const Stat = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Count = styled.strong<{ $color?: string }>`
  color: ${(props) => props.$color ?? props.theme.colors.main};
`;

interface Props {
  matchCount: number;
  nearMissCount: number;
}

export const SimulationSummary = ({ matchCount, nearMissCount }: Props) => (
  <Strip>
    <Stat>
      <Count $color="#2e7d32">{matchCount}</Count>{" "}
      {matchCount === 1 ? "class" : "classes"} would have triggered
    </Stat>
    <Stat>
      <Count $color="#e65100">{nearMissCount}</Count> near{" "}
      {nearMissCount === 1 ? "miss" : "misses"}
    </Stat>
  </Strip>
);
