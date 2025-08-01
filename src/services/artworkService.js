import { apiRequest } from "./api"

export function getAllArtworks() {
  return apiRequest("/artworks")
}
export function getFeaturedArtworks() {
  return apiRequest("/artworks?featured=true")
}
export function getArtworkById(id) {
  return apiRequest(`/artworks/${id}`)
}
export function addArtwork(data) {
  return apiRequest("/artworks", "POST", data)
}
export function updateArtwork(id, data) {
  return apiRequest(`/artworks/${id}`, "PUT", data)
}
export function deleteArtwork(id) {
  return apiRequest(`/artworks/${id}`, "DELETE")
}
