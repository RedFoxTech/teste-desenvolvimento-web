import { ReactNode } from "react";
import { ApiProvider } from "./api";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <ApiProvider>{children}</ApiProvider>;
};
export default Providers;
