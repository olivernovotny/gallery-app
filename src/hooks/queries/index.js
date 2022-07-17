import { useQuery } from "react-query";
import { getGalleryDetail, getGalleries } from "../../api/fetch";

export function useGalleriesQuery() {
  return useQuery("galleries", getGalleries);
}

export function useGalleryQuery(id) {
  return useQuery(["gallery", id], () => getGalleryDetail(id));
}
