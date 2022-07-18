import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DragAndDrop from "../../DragAndDrop/DragAndDrop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useAddImageMutation } from "../../../hooks/mutations";

function AddPhotoModal({ setIsModalOpen }) {
  const { id } = useParams();
  const { t } = useTranslation();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { mutate, isSuccess } = useAddImageMutation();

  if (isSuccess) {
    setIsModalOpen(false);
  }

  return (
    <ModalWrapper title={t("add_photos")} setIsModalOpen={setIsModalOpen}>
      <DragAndDrop setUploadedFiles={setUploadedFiles} />
      <button
        type="button"
        onClick={() => {
          uploadedFiles.forEach((item) => mutate({ id, file: item }));
        }}
      >
        {t("add")}
      </button>
    </ModalWrapper>
  );
}

export default AddPhotoModal;
