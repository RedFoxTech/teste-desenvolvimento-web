import { pokemonTypeColors } from "@/styles/pokemonTypeColors";
import { Pokemon } from "@/types";
import Image from "next/image";
import { PokemonTypeTag } from "../PokemonTypeTag/PokemonTypeTag";

type PokemonCardProps = Pick<
  Pokemon,
  "id" | "name" | "image" | "type1" | "type2"
>;

export const PokemonCard = ({
  id,
  name,
  image,
  type1,
  type2,
}: PokemonCardProps) => {
  return (
    <div
      className={`flex justify-center flex-col h-fit min-w-[144px] max-w-full rounded-3xl px-4 pt-1 py-2 hover:shadow-lg transition duration-200 select-none`}
      style={{ backgroundColor: `${pokemonTypeColors[type1]}` }}
    >
      <p className="h-4 self-end text-black opacity-20 font-extrabold text-lg">
        #{("00" + id).slice(-3)}
      </p>
      <h3 className="text-white text-xl font-bold mb-2">{name}</h3>

      <div className="flex justify-between ">
        <div className="h-full pt-3 flex flex-col gap-2">
          <PokemonTypeTag type={type1} />
          <PokemonTypeTag type={type2} />
        </div>

        <div className="w-20 h-20 self-end flex align-sub">
          <Image src={image} alt={name} width={80} height={80} priority />
        </div>
      </div>
    </div>
  );
};
