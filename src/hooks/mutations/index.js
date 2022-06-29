import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { postGallery, postImage } from "../../api/fetch";

export function useAddGalleryMutation() {
  return useMutation((newName) => postGallery(newName), {
    onSuccess: () => {
      toast.success("Galéria bola úspešne vytvorená");
    },
    onError: (err) => toast.error(err.message),
  });
}

export function useAddImageMutation() {
  return useMutation((id, image) => postImage(id, image), {
    onSuccess: () => {
      toast.success("Fotka bola úspešne pridaná");
    },
    onError: (err) => toast.error(err.message),
  });
}
