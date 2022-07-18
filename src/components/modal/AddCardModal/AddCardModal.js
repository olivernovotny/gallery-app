import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TextField } from "@mui/material";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./AddCardModal.module.scss";
import { useAddGalleryMutation } from "../../../hooks/mutations";

function AddCardModal({ setIsModalOpen }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const galleryName = useRef();
  const { mutate, isSuccess } = useAddGalleryMutation();

  if (isSuccess) {
    setIsModalOpen(false);
    navigate(`../gallery/${galleryName.current.value}`, { replace: true });
  }

  return (
    <ModalWrapper title="add_category" setIsModalOpen={setIsModalOpen}>
      <TextField
        className={styles.textField}
        label={t("category_name")}
        color="info"
        inputRef={galleryName}
        required
      />
      <button
        type="button"
        onClick={() => {
          mutate(galleryName.current.value);
        }}
      >
        {t("add")}
      </button>
    </ModalWrapper>
  );
}

export default AddCardModal;
