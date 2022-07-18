import React from "react";
import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";
import styles from "./DragAndDrop.module.scss";

function DragAndDrop({ setUploadedFiles }) {
  const { t } = useTranslation();
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
      <h5>{t("drop_photos_here")}</h5>
      <p>{t("or")}</p>
      <input {...getInputProps()} />
      <button className={styles.fileUploadContainer} type="button">
        {t("select_files")}
      </button>
      {files}
    </div>
  );
}

export default DragAndDrop;
