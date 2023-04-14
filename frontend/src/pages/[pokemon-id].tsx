import { PokemonTypeTag } from "@/components/display";
import { useQueryGet } from "@/hooks/useQueryGet";
import { pokemonTypeColors } from "@/styles/pokemonTypeColors";
import { Pokemon } from "@/types";
import { ArrowLeftLine, ArrowRightLine } from "@rsuite/icons";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PokemonSlug() {
  const { query, back, push } = useRouter();
  const pokemonId = String(query["pokemon-id"]);

  const {
    data: pokemonData,
    isSuccess,
    isLoading,
  } = useQueryGet<Pokemon>({
    queryKeys: ["pokemon", pokemonId],
    url: `pokemons/${pokemonId}`,
    queryConfigs: {
      enabled: !!pokemonId,
      refetchOnWindowFocus: false,
    },
  });

  return (
    <>
      <Head>
        <title>{pokemonData?.name}</title>
      </Head>

      <main
        className="flex gap-3 w-[494px] min-h-fit h-full max-h-[764px] flex-col rounded-3xl overflow-auto select-none"
        style={{
          backgroundColor: pokemonData
            ? pokemonTypeColors[pokemonData?.type1]
            : "white",
        }}
      >
        <div
          className="flex flex-1 flex-col p-7 pt-5 gap-6"
          style={{
            backgroundColor: pokemonData
              ? pokemonTypeColors[pokemonData?.type1]
              : "white",
          }}
        >
          <div className="flex flex-col w-full justify-between gap-4">
            <button
              onClick={() => push(`/`)}
              className="bg-black/10 rounded-full w-9 h-9 border-solid border-transparent
            hover:bg-black/20"
            >
              <ArrowLeftLine height={32} width={32} color="#FFFFFF" />
            </button>

            <div className="flex w-full h-full justify-between">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl text-left font-bold text-white">
                  {pokemonData?.name}
                </h1>

                <div className="flex gap-3">
                  {isSuccess && <PokemonTypeTag type={pokemonData?.type1} />}
                  {isSuccess && <PokemonTypeTag type={pokemonData?.type2} />}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="h-4 text-black opacity-20 font-extrabold text-3xl">
                  #
                  {pokemonData?.id ? ("00" + pokemonData?.id).slice(-3) : "000"}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-between m-auto">
            <button
              onClick={() => push(`${pokemonData && pokemonData?.id - 1}`)}
              disabled={pokemonData?.id === 1}
              className="bg-black/10 rounded-full w-9 h-9 hover:bg-black/20 disabled:bg-transparent disabled:hover:bg-transparent"
            >
              <ArrowLeftLine
                height={32}
                width={32}
                color={pokemonData?.id === 1 ? "transparent" : "#FFFFFF"}
              />
            </button>
            <div className="w-48 h-48 self-center flex align-sub">
              {isSuccess && (
                <Image
                  src={pokemonData?.image}
                  alt={pokemonData?.name}
                  width={672}
                  height={672}
                  priority
                />
              )}
            </div>
            <button
              onClick={() => push(`${pokemonData && pokemonData?.id + 1}`)}
              disabled={pokemonData?.id === 151}
              className="bg-black/10 rounded-full w-9 h-9 hover:bg-black/20 disabled:bg-transparent disabled:hover:bg-transparent"
            >
              <ArrowRightLine
                height={32}
                width={32}
                color={pokemonData?.id === 151 ? "transparent" : "#FFFFFF"}
              />
            </button>
          </div>
        </div>

        <div className="flex h-fit p-7 overflow-auto bg-white rounded-3xl justify-between">
          <div className="w-full flex flex-col gap-6">
            <div className="flex gap-4">
              <p className="text-4xl text-left font-bold text-red-500">ATK</p>
              <p className="text-4xl font-bold ">{pokemonData?.atk}</p>
            </div>

            <div className="flex gap-4">
              <p className="text-4xl text-left font-bold text-blue-500">DEF</p>
              <p className="text-4xl font-bold">{pokemonData?.def}</p>
            </div>

            <div className="flex gap-4">
              <p className="text-4xl text-left font-bold text-green-500">STA</p>
              <p className="text-4xl font-bold ">{pokemonData?.sta}</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <div
              className="rounded-full w-[164px] h-[164px] flex flex-col items-center justify-center"
              style={{
                backgroundColor: pokemonData
                  ? pokemonTypeColors[pokemonData?.type1]
                  : "white",
              }}
            >
              {!pokemonData?.isLegendary && (
                <h3 className="text-2xl font-bold text-white">STAGE</h3>
              )}

              {!pokemonData?.isLegendary ? (
                <h1 className="text-6xl text-white font-bold">
                  {pokemonData?.isEvolved
                    ? "Final"
                    : pokemonData?.evolutionStage}
                </h1>
              ) : (
                <h1 className="text-3xl font-bold  text-white">Legendary</h1>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
