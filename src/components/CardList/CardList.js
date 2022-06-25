import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import { useGalleries } from "../../hooks/useGalleries";

function CardList() {
  const { data, error } = useGalleries();

  if (error) {
    console.error(error.message);
  }

  return (
    <div className={styles.mainContainer}>
      {data?.galleries.map((item) => (
        <Card
          key={item.name}
          galleryName={item.name}
          imagePath={item.image ? item.image.fullpath : null}
        />
      ))}
      <AddCard title="Pridať kategóriu" />
    </div>
  );
}

export default CardList;
