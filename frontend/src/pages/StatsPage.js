import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Title, SubTitle, Container } from 'reactbulma';
import api from '../services/api';

const StatsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(async () => {
    const statsDetails = await api.getStatsById(id);
    setData(statsDetails[0]);
  }, []);

  console.log(data);
  return (
    <Container>
      <Title>Stats</Title>
      <SubTitle>Stat Total: {data.stat_total}</SubTitle>
      <SubTitle>Atk: {data.atk}</SubTitle>
      <SubTitle>Def: {data.def}</SubTitle>
      <SubTitle>Sta: {data.sta}</SubTitle>
      <SubTitle>Cp 40: {data.cp40}</SubTitle>
    </Container>
  );
};

export default StatsPage;
