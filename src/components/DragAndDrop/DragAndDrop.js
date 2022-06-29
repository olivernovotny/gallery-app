/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { IoImageOutline } from "react-icons/io5";
import styles from "./DragAndDrop.module.scss";

function DragAndDrop({ setUploadFile, uploadFile }) {
  return (
    <div className={styles.container}>
      <IoImageOutline size={24} />
      <h5>Sem presuňte fotky</h5>
      <p>alebo</p>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          style={{ visibility: "hidden", display: "none" }}
          onChange={(e) => {
            setUploadFile([...uploadFile, e.target.files[0]]);
          }}
        />
        <Button
          className={styles.fileUploadContainer}
          variant="contained"
          component="span"
        >
          Vyberte súbory
        </Button>
      </label>
      {uploadFile.length > 0
        ? uploadFile?.map((item, index) => (
            <div key={index} className={styles.fileContainer}>
              {item.name}
            </div>
          ))
        : null}

      {uploadFile.length > 0 ? (
        <button
          className={styles.removeButton}
          type="button"
          onClick={() => setUploadFile([])}
        >
          remove
        </button>
      ) : null}
    </div>
  );
}

export default DragAndDrop;
