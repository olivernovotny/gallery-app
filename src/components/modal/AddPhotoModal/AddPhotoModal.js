import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DragAndDrop from "../../DragAndDrop/DragAndDrop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useAddImageMutation } from "../../../hooks/mutations";

function AddPhotoModal({ setIsModalOpen }) {
  const { id } = useParams();

  const [uploadFile, setUploadFile] = useState([]);

  const { mutate, isSuccess } = useAddImageMutation();

  if (isSuccess) {
    setUploadFile([]);
    setIsModalOpen(false);
  }

  return (
    <ModalWrapper title="Pridať fotky" setIsModalOpen={setIsModalOpen}>
      <DragAndDrop setUploadFile={setUploadFile} uploadFile={uploadFile} />
      <button
        type="button"
        onClick={() => {
          uploadFile.forEach((item) => mutate({ id, file: item }));
        }}
      >
        Pridať
      </button>
    </ModalWrapper>
  );
}

export default AddPhotoModal;
