import { useQuery } from "react-query";
import { fetchApiData } from "../api/fetch";

export function useGalleries() {
  return useQuery("galleries", () => fetchApiData("/gallery"));
}
