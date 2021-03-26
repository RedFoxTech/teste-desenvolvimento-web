import React, { useState, useEffect } from 'react';
import { numberDateToExtenseDate } from '../helpers/objectsBuilder';
import TransactionsDataService from '../services/ServicePokemonAPI';
import { Select } from 'react-materialize';

const PeriodSelector = ({ onDataChange }) =>
{
  //const [currentPeriod, setCurrentPeriod] = useState('');
  const [periodsList, setPeriodsList] = useState([
    '',
    '2019-01',
    '2019-02',
    '2019-03',
    '2020-07',
  ]);

  useEffect(() =>
  {
    findPeriods();
  }, []);

  const findPeriods = () =>
  {
    TransactionsDataService.findUniquePeriods()
      .then((response) =>
      {
        const allPeriods = ['', ...response.data];
        setPeriodsList(allPeriods);
        console.log(response.data);
      })
      .catch((e) =>
      {
        console.log(e);
      });
  };

  const periodsName = periodsList.map((period) =>
  {
    if (period.length > 0)
    {
      return numberDateToExtenseDate(period);
    } else
    {
      return 'Selecione uma opção';
    }
  });

  const handlePeriodChange = (event) =>
  {
    console.log(periodsList[event.target.value]);
    onDataChange(periodsList[event.target.value]);
  };

  return (
    <Select
      className="blue-grey-text lighten-1"
      id="Select-9"
      multiple={false}
      onChange={(event) => handlePeriodChange(event)}
      options={{
        classes: '',
        dropdownOptions: {
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250,
        },
      }}
    >
      {periodsName.map((periodName, key) => (
        <option value={key}>{periodName}</option>
      ))}
    </Select>
  );
};

export default PeriodSelector;
