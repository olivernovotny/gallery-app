import i18n from "../../languague/i18n";

function getNumberOfImagesString(galleryImages) {
  if (galleryImages.length === 1) return `1 ${i18n.t("photo_1")}`;
  if (galleryImages.length > 1 && galleryImages.length < 5)
    return `${galleryImages.length} ${i18n.t("photo_2")}`;

  return `${galleryImages.length} ${i18n.t("photo_5")}`;
}

export default getNumberOfImagesString;
