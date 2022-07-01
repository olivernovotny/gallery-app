import React from "react";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";
import styles from "./DragAndDrop.module.scss";

function DragAndDrop({ setUploadedFiles }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: (files) => setUploadedFiles(files),
  });

  const files = acceptedFiles.map((file) => (
    <div key={file.path} className={styles.fileContainer}>
      {file.path}
    </div>
  ));

  return (
    <div className={styles.container} {...getRootProps()}>
      <IoImageOutline size={24} />
      <h5>Sem presuňte fotky</h5>
      <p>alebo</p>
      <input {...getInputProps()} />
      <button className={styles.fileUploadContainer} type="button">
        Vyberte súbory
      </button>
      {files}
    </div>
  );
}

export default DragAndDrop;
