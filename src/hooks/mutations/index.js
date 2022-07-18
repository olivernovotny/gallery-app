import { useMutation } from "react-query";
import { toast } from "react-toastify";
import i18n from "../../languague/i18n";
import { postGallery, postImage } from "../../api/fetch";

export function useAddGalleryMutation() {
  return useMutation((newName) => postGallery(newName), {
    onSuccess: () => {
      toast.success(i18n.t("gallery_successfully_added"));
    },
    onError: (err) => toast.error(err.message),
  });
}

export function useAddImageMutation() {
  return useMutation((id, image) => postImage(id, image), {
    onSuccess: () => {
      toast.success(i18n.t("photo_successfully_added"));
    },
    onError: (err) => toast.error(err.message),
  });
}
