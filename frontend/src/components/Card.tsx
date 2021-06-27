import React from 'react'
import { Loading } from './Loading'

interface CardProps {
  Name: string
  Imgname: string
  Type1: string
  Type2: string
  EvolutionStage: string
  Weather1: string
  Weather2: string
  Generation: number
  PokedexNumber: number
  ATK: number
  DEF: number
  STA: number
  STATTOTAL: number
  Aquireable: number
  CrossGen: number
  Hatchable: number
  Raidable: number
  Regional: number
  Shiny: number
  loading: boolean
}

export function Card({
  Aquireable,
  CrossGen,
  Hatchable,
  Raidable,
  Regional,
  Shiny,
  Name,
  Imgname,
  Type1,
  Type2,
  PokedexNumber,
  EvolutionStage,
  Weather1,
  Weather2,
  Generation,
  ATK,
  DEF,
  STA,
  STATTOTAL,
  loading
}: CardProps) {
  return (
    <div className="flex flex-wrap  pt-8 pr-5 pl-5 pb-5 items-center card	">
      {loading == true? (
        <div className="flex items-center justify-center w-full">
          <Loading />
        </div>
      ) : (
        <>
          {/* Card Info */}
          <div className="bg-white  flex-3  ml-5 mr-14 relative text-center	rounded-3xl shadow-2xl">
            {/* Card Header */}
            <div className="relative">
              <div className="left-2/4 top-2/4 absolute transform -translate-y-2/4 flex-4 items-center justify-center -translate-x-2/4 filter drop-shadow-3xl min-h-0 min-w-0">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Imgname}.png`}
                  className="block max-w-full	"
                  alt="pokemon"
                />
              </div>
              <div className="text-8xl font-medium text-gray-light ">
                {PokedexNumber.toString().length < 2
                  ? `#00${PokedexNumber}`
                  : PokedexNumber.toString().length == 2
                  ? `#0${PokedexNumber}`
                  : `#${PokedexNumber}`}
              </div>
            </div>
            {/* Name */}
            <div className="text-lg	font-medium	-mt-2.5	">{Name}</div>
            <p className="text-sm mt-0 mb-2.5	">Seed Pokemon</p>
            <div className="flex justify-center whitespace-nowrap	">
              <span className={`${Type1} text-sm uppercase font-medium`}>
                {Type1}
              </span>
              <span
                className={`${Type2} before text-sm  uppercase font-medium`}
              >
                {Type2}
              </span>
            </div>
            <div className="-left-2.5 bg-white rounded-sm shadow-2xl text-sm font-medium		leading-extra absolute -top-2.5	w-14">
              {EvolutionStage}
            </div>
            <div
              className={`bg-green-card text-white -right-2.5 bg-white rounded-sm shadow-2xl text-sm font-medium leading-extra absolute -top-2.5 w-14`}
            >
              {Generation}
            </div>
            <div className="mb-5 mt-1.5		">
              <span className="text-sm font-medium">{Weather1}</span>
              <span className="text-sm font-medium ml-2.5	">{Weather2}</span>
            </div>
          </div>
          <table className="mr-14">
            <tbody>
              <tr>
                <td>
                  <strong>ATK</strong>
                </td>
                <td>{ATK}</td>
                <td>
                  <div className="bg-gray-light w-48 h-2.5 overflow-hidden	rounded	">
                    <div
                      className={`${
                        (ATK * 100) / 500 < 40
                          ? 'low'
                          : (ATK * 100) / 500 > 55
                          ? 'high'
                          : 'medium'
                      } h-full	relative`}
                      style={{ width: `${(ATK * 100) / 500}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>DEF</strong>
                </td>
                <td>{DEF}</td>
                <td>
                  <div className="bg-gray-light w-48 h-2.5 overflow-hidden	rounded	">
                    <div
                      className={`${
                        (DEF * 100) / 500 < 40
                          ? 'low'
                          : (DEF * 100) / 500 > 55
                          ? 'high'
                          : 'medium'
                      } h-full	relative`}
                      style={{ width: `${(DEF * 100) / 500}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>STA</strong>
                </td>
                <td>{STA}</td>
                <td>
                  <div className="bg-gray-light w-48 h-2.5 overflow-hidden 	rounded	">
                    <div
                      className={`${
                        (STA * 100) / 300 < 40
                          ? 'low'
                          : (STA * 100) / 300 > 55
                          ? 'high'
                          : 'medium'
                      } h-full	relative`}
                      style={{ width: `${(STA * 100) / 300}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>STAT TOTAL</strong>
                </td>
                <td>{STATTOTAL}</td>
                <td>
                  <div className="bg-gray-light w-48 h-2.5 overflow-hidden	rounded	">
                    <div
                      className={`${
                        (STATTOTAL * 100) / 1000 < 40
                          ? 'low'
                          : (STATTOTAL * 100) / 1000 > 55
                          ? 'high'
                          : 'medium'
                      } h-full	relative`}
                      style={{ width: `${(STATTOTAL * 100) / 1000}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <button className='bg-green-400 text-white rounded px-2.5 py-4 uppercase text-center	 text-sm font-medium h-4 w-20 items-center justify-center hover:bg-green-300 hover:transition hover:delay-1000		flex ' >Details</button> */}
          <div className="flex items-center ml-20">
            <div className="flex flex-5 flex-wrap	">
              <h3 className="flex-7 mb-2.5 pl-2.5	">Infos</h3>
              <span
                className={`${Aquireable == 0 ? 'low' : 'high'} text-sm rounded-3xl shadow-move mb-5 mr-5 py-1.5 px-1.5`}
              >
                Aquireable
              </span>
              <span className={`${CrossGen == 0 ? 'low' : 'high'} text-sm rounded-3xl shadow-move mb-5 mr-5 py-1.5 px-1.5`}>
                CrossGen
              </span>
              <span className={`${Hatchable == 0 ? 'low' : 'high'} text-sm rounded-3xl shadow-move mb-5 mr-5 py-1.5 px-1.5`}>
                Hatchable
              </span>
              <span className={`${Raidable == 0 ? 'low' : 'high'} text-sm rounded-3xl shadow-move mb-5 mr-5 py-1.5 px-1.5`}>
                Raidable
              </span>
              <span className={`${Regional == 0 ? 'low' : 'high'} text-sm rounded-3xl shadow-move mb-5 mr-5 py-1.5 px-1.5`}>
                Regional
              </span>
              <span className={`${Shiny == 0 ? 'low' : 'high'} text-sm rounded-3xl shadow-move mb-5 mr-5 py-1.5 px-1.5`}>
                Shiny
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
