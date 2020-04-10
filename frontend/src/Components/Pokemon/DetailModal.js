import React from 'react';
import { Modal } from 'reactstrap';
import HSBar from "react-horizontal-stacked-bar-chart";

export default function DetailModal({ onClose, data, show }) {
    return (
        <>
            {
                data.id &&
                <Modal 
                    isOpen={ show } 
                    toggle={onClose}
                    className={`DetailModal-main`}>
                    <div className={`DetailModal-content ${data.type1}`}>
                        <div className="DetailModal-detail">
                            <h3>Pokémon Detail</h3>
                        </div>
                        <div className="DetailModal-image">
                            <img width="30px" src={`/assets/img/types/${data.type1}.svg`} />
                            <img width="120px" src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${data.name.toLowerCase()}.png`} />
                        </div>
                        <div className="DetailModal-name">
                            <h4>{ data.name }</h4>
                        </div>
                        <div className="DetailModal-infos">
                            <div className="DetailModal-bar">
                                <span>ATK</span>
                                <HSBar
                                    height={7}
                                    data={[{value: Number(data.atk), color: "red"}, {value: 500,color: "white"}]}
                                />
                            </div>
                            <div className="DetailModal-bar">
                                <span>DEF</span>
                                <HSBar
                                    height={7}
                                    data={[{value: Number(data.def), color: "red"}, {value: 500,color: "white"}]}
                                />
                            </div>
                            <div className="DetailModal-bar">
                                <span>STA</span>
                                <HSBar
                                    height={7}
                                    data={[{value: Number(data.sta), color: "red"}, {value: 500,color: "white"}]}
                                />
                            </div>
                            <p>Type: { `${data.type1} ${data.type2 && `/ ${data.type2}`}` }</p>
                            <p>Weather: { `${data.weather1} ${data.weather2 && `/ ${data.weather2}`}` }</p>
                        </div>
                        <div className="DetailModal-button">
                            <button className="btn btn-secondary btn-block" onClick={ onClose }>Fechar</button>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}