import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import { useGalleriesQuery } from "../../hooks/queries";
import AddCardModal from "../modal/AddCardModal/AddCardModal";

function CardList() {
  const { data, refetch } = useGalleriesQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    refetch();
  }, [isModalOpen, refetch]);

  return (
    <div className={styles.mainContainer}>
      {data?.galleries.map((item) => (
        <Card
          key={item.name}
          galleryName={item.name}
          imagePath={item.image ? item.image.fullpath : null}
        />
      ))}
      <AddCard title="add_category" setIsModalOpen={setIsModalOpen} />
      {isModalOpen ? <AddCardModal setIsModalOpen={setIsModalOpen} /> : null}
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        style={{ paddingRight: 0 }}
        pauseOnFocusLoss={false}
      />
    </div>
  );
}

export default CardList;
