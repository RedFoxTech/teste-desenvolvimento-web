import { PokemonTypes } from "@/types";
type PokemonTypeTagProp = { type: PokemonTypes | null };

export const PokemonTypeTag = ({ type }: PokemonTypeTagProp) => {
  return (
    type && (
      <span className="h-6 flex items-center text-white bg-black/10 w-fit px-3 rounded-full text-sm font-medium">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    )
  );
};
