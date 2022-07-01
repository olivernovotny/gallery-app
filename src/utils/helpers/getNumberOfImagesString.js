function getNumberOfImagesString(galleryImages) {
  if (galleryImages.length === 1) return "1 fotka";
  if (galleryImages.length > 1 && galleryImages.length < 5)
    return `${galleryImages.length} fotky`;

  return `${galleryImages.length} fotiek`;
}

export default getNumberOfImagesString;
