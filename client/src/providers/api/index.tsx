import { createContext, useContext, useState } from "react";
import { AxiosError } from "axios";
import { pokemonsURL } from "../../service/api";
import {
  IDefaultErrorResponse,
  IDefaultProviderProps,
  IPokemonsData,
  IContextProps,
} from "./interfaces";

const ApiContext = createContext<IContextProps>({} as IContextProps);

export const ApiProvider = ({ children }: IDefaultProviderProps) => {
  const [pokemonsData, setPokemonsData] = useState<IPokemonsData[]>(
    [] as IPokemonsData[]
  );

  const fetchPokemons = async (): Promise<void> => {
    await pokemonsURL
      .get<IPokemonsData[]>("")
      .then((res) => {
        setPokemonsData(res.data);
      })
      .catch((err) => {
        const currentError = err as AxiosError<IDefaultErrorResponse>;
        console.log(currentError);
      });
  };

  return (
    <ApiContext.Provider
      value={{ pokemonsData, setPokemonsData, fetchPokemons }}
    >
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
