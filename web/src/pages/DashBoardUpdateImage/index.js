import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { useHistory, useLocation } from "react-router-dom";

import ContainerComponent from "../../components/Container";
import TitleSecondary from "../../components/TitleSecondary";

import API from "../../services/api";
import useTokenStore from "../../hooks/useTokenStore";
import InputCreatePokemon from "../../components/FormCreatePokemon/Input";
import FormCreatePokemon from "../../components/FormCreatePokemon";
import ButtonCreatePokemon from "../../components/FormCreatePokemon/Button";
import GoBackDashBoardHeader from "../../components/GoBackDashBoardHeader";
import handlerFile from "../../utils/handlerFile";

function DashBoardUpdateImage() {
  const location = useLocation();
  const history = useHistory();
  const { getUserToken } = useTokenStore();

  const [ image, setImage ] = useState('');
  const [ pokemonId, setPokemonId  ] = useState(null);
  const [ pokemonName, setPokemonName ] = useState('');

  useEffect(() => {  
    (async () => {
      if (!location.state) {
        history.push('/dashboard');
        return;
      } else {
        setPokemonId(location.state.id);
        setPokemonName(location.state.name);
      }
    })()
  }, []);

  const token = getUserToken();
  
  async function handlerUpdateImage() {
    if (image) {
      const data = new FormData();
      data.append('image', image);

      try {
        const response = await API.put(`/session/newimage/${pokemonId}`, data,
          { headers: { Authorization: `Bearer ${token}`, 
          'content-type': 'multipart/form-data' }});
        
        if (response.status === 200) {
          toast.success('Imagem atualizada com sucesso!');
        }
      } catch (err) {
        toast.info('Houve um problema inesperado, tente novamente.');
      }
    }
  }
  
  function handlerImage(e) {
    setImage(e.target.files[0]);
    handlerFile(e, '#imageFile');
  }

  return (
    <>
      <GoBackDashBoardHeader/>
      <Box bgcolor="dark.main" minHeight="100vh" display="flex" flexDirection="column" justifyContent='center' alignItems='center'>    
        <ContainerComponent>
          <TitleSecondary label={`Mudar imagem do ${pokemonName}`}/>

          <Box display="flex" justifyContent='center' alignItems='center' minHeight="100%">
            <FormCreatePokemon>
              <InputCreatePokemon isFile={true} id="image" label="Imagem" type="file" name="image" onChange={handlerImage}/>
              <ButtonCreatePokemon label="Atualizar imagem" onClick={handlerUpdateImage}/>
            </FormCreatePokemon>
          </Box>

        </ContainerComponent>
      </Box>
    </>
  )
}

export default DashBoardUpdateImage;