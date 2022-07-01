import { API_URL } from "../constants";

function getFullImagePath(imagePath) {
  return imagePath
    ? `${API_URL}images/0x0/${imagePath}`
    : "./images/no-image.png";
}

export default getFullImagePath;
