import axios from "axios";
import { BookType } from "../types";

export function apiRequestLoad(url: string) {
    return axios.get(url); // The simple API request with special url from attribute
}

export function apiRequestDelete(url: string, id: number) {
    return axios.delete(`${url}${id}`); // The API request for delete special book
}

export function apiRequestAdd(url: string, data: BookType) {
    return axios.post(url, data);
}

export function apiRequestChange(url: string, data: BookType) {
    return axios.put(url, data);
}
