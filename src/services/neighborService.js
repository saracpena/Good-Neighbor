import http from "./httpService";

export const getNeighbors = () => {
    return http.get("http://localhost:8080/neighbors");
}