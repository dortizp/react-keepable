const BASE_URL = "https://codeable-keep-api-production.up.railway.app/api";

export const getNotes = async (username) => {
    const url = `${BASE_URL}/${username}/notes`
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        const error = await response.json()
        console.log(error)
    }
}