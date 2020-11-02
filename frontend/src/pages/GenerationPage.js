import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Title, SubTitle, Container } from 'reactbulma';
import api from '../services/api';

const GenerationPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(async () => {
    const generationDetails = await api.getGenerationsById(id);
    setData(generationDetails[0]);
  }, []);

  console.log(data);
  return (
    <Container>
      <Title>Generation</Title>
      {data.familyId ? <SubTitle>Family Id: {data.familyId}</SubTitle> : null}
      {data.evolutionStage ? <SubTitle>Evolution Stage: {data.evolutionStage}</SubTitle> : null}
      <SubTitle>Evolved: {data.evolved}</SubTitle>
      <SubTitle>Future Evolve: {data.futureEvolve}</SubTitle>
      <SubTitle>Cross Gen: {data.crossGen}</SubTitle>
    </Container>
  );
};

export default GenerationPage;
