import { useEffect } from "react";
import { useApi } from "../../providers/api";
import { Header, Pokemons } from "../../components";

const Home = () => {
  const { fetchPokemons } = useApi();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Header />
      <Pokemons />
    </>
  );
};
export default Home;
