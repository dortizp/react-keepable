const BASE_URL = "https://codeable-keep-api-production.up.railway.app/api";

export const getNotes = async (username) => {
  const url = `${BASE_URL}/${username}/notes`;
  console.log("url ", url);
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const error = await response.json();
    console.log(error);
  }
};

export const createNote = async (username, noteData) => {
  const url = `${BASE_URL}/${username}/notes`;
  const options = {
    method: "POST",
    body: JSON.stringify(noteData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const error = await response.json();
    return error.message || "There was an error";
  }
};
