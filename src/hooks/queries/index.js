import { useQuery } from "react-query";
import { fetchApiData } from "../../api/fetch";

export function useGalleriesQuery() {
  return useQuery("galleries", () => fetchApiData("/gallery"));
}

export function useGalleryQuery(id) {
  return useQuery(["gallery", id], () => fetchApiData(`/gallery/${id}`));
}
