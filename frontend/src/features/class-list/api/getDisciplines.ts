import { base } from "../../api/base";
import { Discipline } from "../types/Discipline";

interface RawDiscipline {
  id: number;
  name: string;
  description: string;
}

interface RawResponse {
  count: number;
  results: RawDiscipline[];
}

interface Response {
  count: number;
  results: Discipline[];
}

export const getDisciplines = async (studioId: string): Promise<Response> => {
  const queryParams = new URLSearchParams({
    sort: "name",
  });
  const rawResponse = await base.proxyGet<RawResponse>(
    `https://schedule.studio.onepeloton.com/api/v2/offering_type_categories?${queryParams}`,
    {
      headers: {
        "Teamup-Request-Mode": "customer",
        "Teamup-Provider-ID": studioId,
      },
    }
  );
  return {
    count: rawResponse.count,
    results: rawResponse.results.map((result) => ({
      id: result.id.toString(),
      name: result.name,
    })),
  };
};
