// ImageUpload POST API
export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDYNARY_PRESET);

  return fetch(process.env.REACT_APP_CLOUDYNARY_URL, {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
