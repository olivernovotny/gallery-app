export async function getGalleries() {
  return fetch(`${process.env.REACT_APP_API_URL}gallery`).then((res) =>
    res.json()
  );
}

export async function getGalleryDetail(id) {
  return fetch(`${process.env.REACT_APP_API_URL}gallery/${id}`).then((res) =>
    res.json()
  );
}

export async function postGallery(galleryName) {
  const data = {
    name: galleryName,
  };

  return fetch(`${process.env.REACT_APP_API_URL}/gallery`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 400:
            return Promise.reject(
              Error("Názov galérie nesmie obsahovať lomku")
            );
          case 409:
            return Promise.reject(Error("Galéria s takýmto menom už existuje"));
          default:
            return Promise.reject(Error("Neznáma chyba"));
        }
      }

      return res.json();
    })
    .catch();
}

export async function postImage(variables) {
  if (!variables.file.name.match(/.(jpg|jpeg)$/i)) {
    return Promise.reject(Error("Nesprávny formát obrázka"));
  }
  const fd = new FormData();
  fd.append("image", variables.file, variables.file.name);

  return fetch(`${process.env.REACT_APP_API_URL}gallery/${variables.id}`, {
    method: "POST",
    body: fd,
  })
    .then((res) => {
      if (!res.ok) {
        switch (res.status) {
          case 400:
            return Promise.reject(Error("Fotka nebola nájdená"));
          case 404:
            return Promise.reject(Error("Galéria nebola nájdená"));
          default:
            return Promise.reject(Error("Neznáma chyba"));
        }
      }

      return res.json();
    })
    .catch();
}
