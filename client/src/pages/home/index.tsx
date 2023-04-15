import { useEffect } from "react";
import { useApi } from "../../providers/api";
import Header from "../../components/header";
import Cards from "../../components/cards";

const Home = () => {
  const { fetchPokemons } = useApi();

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Header />
      <Cards />
    </>
  );
};
export default Home;
