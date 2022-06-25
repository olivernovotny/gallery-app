import React from "react";
import { CardList } from "../../components";
import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <p className={styles.subtitle}>Kategórie</p>
      <CardList />
    </>
  );
}

export default Home;
