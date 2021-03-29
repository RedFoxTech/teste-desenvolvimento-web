import { createContext, useState } from "react";

export const FilterPokemonsContext = createContext(null);

export function FilterPokemonsContextProvieder({ children }) {
  const [ openDialogFilter, setOpenDialogFilter ] = useState(false);
  const [ queries, setQueries ] = useState('');

  const handleOpenDialogFilter = () => {
    setOpenDialogFilter(true);
  };

  const handleCloseDialogFilter = () => {
    setOpenDialogFilter(false);
  };
 
  return (
    <FilterPokemonsContext.Provider value={{
      openDialogFilter, 
      handleCloseDialogFilter, 
      handleOpenDialogFilter,
      queries,
      setQueries,
    }}>
      { children }
    </FilterPokemonsContext.Provider>
  )
}