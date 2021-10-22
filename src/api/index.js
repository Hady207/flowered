import { create } from "axios";

export const api = create({
  baseURL: "https://restcountries.com/v3.1/",
});
