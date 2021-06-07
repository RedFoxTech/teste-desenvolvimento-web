import http from "../http-common";

const getAll = () => {
  return http.get("/pokemons");
};

export default {
  getAll,
};
