import { Fragment, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import Head from "next/head";
import { Inter } from "next/font/google";
import { PokemonCard } from "@/components/display";
import { Pokemon } from "@/types";
import { useQueryPagination } from "@/hooks/useQueryPagination";
import { useDebounce } from "@/hooks/helpers/useDebounce";
import { Skeleton, Spinner } from "@/components/feedback";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pokeSearch, setPokeSearch] = useState<string>("");
  const debouncedPokeSearch = useDebounce(pokeSearch, 800);

  const {
    data: pokemonData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
    isSuccess,
    error,
  } = useQueryPagination<Pokemon[]>({
    queryKeys: [debouncedPokeSearch],
    url: "/pokemons",
    searchParams: {
      name: debouncedPokeSearch,
    },
  });

  const handlePokeSearch = (nameSearch: string) => {
    setPokeSearch(nameSearch);
  };

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasNextPage ?? false,
    onLoadMore: fetchNextPage,
    disabled: !!error,
    rootMargin: "0px 0px 200px 0px",
  });

  const dataTotal = pokemonData && pokemonData?.pages[0].results.length;
  const hasData = pokemonData && pokemonData?.pages[0].results.length > 0;
  const hasSearch = pokeSearch.length > 0;
  const hasResultsOnSearch = hasSearch && hasData;

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <main className="flex gap-3 w-[494px] h-full flex-col p-7 pb-5 pr-2 bg-white rounded-3xl overflow-hidden">
        <div className="h-20 pr-5 flex items-center justify-between">
          <h1 className="text-4xl text-left font-bold">Pokedex</h1>

          <div className="flex items-center">
            {isFetching && hasSearch ? <Spinner /> : null}
            <input
              type="text"
              className={
                "border-red-500 w-48 h-8 px-3 rounded-full border-[1px] border-solid  bg-gray-100 outline-none"
              }
              placeholder="Search for a Pokémon"
              value={pokeSearch}
              onChange={(e) => handlePokeSearch(e.target.value)}
            />
          </div>
        </div>

        <div
          ref={rootRef}
          className="grid grid-cols-2 content-start gap-3 h-full items-center pr-3 overflow-auto relative"
        >
          {pokemonData?.pages.map((group, i) => (
            <Fragment key={i}>
              {group?.results.map(({ id, name, image, type1, type2 }) => (
                <Link href={`/${id}`} key={id}>
                  <PokemonCard
                    id={id}
                    name={name}
                    image={image}
                    type1={type1}
                    type2={type2}
                  />
                </Link>
              ))}
            </Fragment>
          ))}

          {isLoading ? <Skeleton quantity={20} /> : null}

          {isFetchingNextPage && !isFetching ? <Skeleton quantity={4} /> : null}

          <span ref={sentryRef} className="sentry" />

          {!hasResultsOnSearch && hasSearch ? (
            <div className="absolute top-[45%] left-[50%] translate-x-[-50%] ">
              No pokemon found
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
