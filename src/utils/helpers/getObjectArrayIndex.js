function getObjectArrayIndex(imageData, imageOpen) {
  return imageData.map((img) => img.fullpath).indexOf(imageOpen);
}

export default getObjectArrayIndex;
