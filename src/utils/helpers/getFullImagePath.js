function getFullImagePath(imagePath) {
  return imagePath
    ? `${process.env.REACT_APP_API_URL}images/300x0/${imagePath}`
    : "./images/no-image.png";
}

export default getFullImagePath;
