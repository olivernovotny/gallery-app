import { API_URL } from "../../utils/constants";

export async function fetchApiData(url) {
  console.log("fetching galleries");
  return fetch(`${API_URL}${url}`).then((res) => res.json());
}
