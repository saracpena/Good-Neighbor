import http from "./httpService";

export const getDisclaimers = () => {
    return http.get("http://localhost:8080/disclaimers")
}