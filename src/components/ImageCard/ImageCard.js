/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import CardWrapper from "../layout/CardWrapper/CardWrapper";
import getFullImagePath from "../../utils/helpers/getFullImagePath";

function ImageCard({ imagePath, setIsImageOpen }) {
  const [fullImagePath, setFullImagePath] = useState(
    getFullImagePath(imagePath)
  );
  return (
    <CardWrapper>
      <img
        src={fullImagePath}
        alt="Gallery content."
        onError={() => setFullImagePath("./images/no-image.png")}
        loading="lazy"
        width="100%"
        height="100%"
        onClick={() => setIsImageOpen(true)}
      />
    </CardWrapper>
  );
}

export default ImageCard;
