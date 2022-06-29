import { API_URL } from "../constants";

function getFullImagePath(imagePath) {
  return imagePath
    ? `${API_URL}images/200x200/${imagePath}`
    : "./images/no-image.png";
}

export default getFullImagePath;
