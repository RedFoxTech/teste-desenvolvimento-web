import React, { useState } from "react";

export default props => {
    const imgPadrao =
        "https://http2.mlstatic.com/colar-pingente-anime-geek-pokemon-pokebola-pokeball-esfera-D_NQ_NP_928688-MLB28019029999_082018-F.jpg";
    const [nome, setNome] = useState("");
    const [pokedex, setPokedex] = useState("");
    const [imagem, setImagem] = useState("");
    const [geracao, setGeracao] = useState("");
    const [evolucao, setEvolucao] = useState("");
    const [familia, setFamilia] = useState("");
    const [tipo1, setTipo1] = useState("");
    const [tipo2, setTipo2] = useState("");
    const [ambiente1, setAmbiente1] = useState("");
    const [ambiente2, setAmbiente2] = useState("");
    const [atk, setAtk] = useState("");
    const [def, setDef] = useState("");
    const [sta, setSta] = useState("");
    const [lendario, setLendario] = useState("");

    const onSubmit = async () => {
        try {
            const body = {
                name: nome,
                pokedexNumber: parseInt(pokedex),
                img: imagem || imgPadrao,
                generation: parseInt(geracao),
                evolutionStage: parseInt(evolucao),
                FamilyId: parseInt(familia),
                Type1: tipo1,
                Type2: tipo2,
                weather1: ambiente1,
                weather2: ambiente2,
                atk: parseInt(atk),
                def: parseInt(def),
                sta: parseInt(sta),
                legendary: parseInt(lendario)
            };
            console.log(body);
            await fetch("http://localhost:3030/pokemons", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            props.refresh();
        } catch (err) {
            console.log(err.message);
        }
    };

    const refresh = async () => {};

    return (
        <div className="modal" tabindex="-1" role="dialog" id="modalCadastro">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cadastro</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label>Nome</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Nome do Pokemon"
                                value={nome}
                                onChange={ev => setNome(ev.target.value)}
                            />

                            <label>Numero Pokedex</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Pokedex"
                                value={pokedex}
                                onChange={ev => setPokedex(ev.target.value)}
                            />
                            <label>URL da imagem</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="imagem"
                                value={imagem}
                                onChange={ev => setImagem(ev.target.value)}
                            />
                            <label>Geração</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Geração"
                                value={geracao}
                                onChange={ev => setGeracao(ev.target.value)}
                            />
                            <label>Estagio de evolução</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Evolução"
                                value={evolucao}
                                onChange={ev => setEvolucao(ev.target.value)}
                            />
                            <label>ID Familia</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Familia"
                                value={familia}
                                onChange={ev => setFamilia(ev.target.value)}
                            />
                            <label>Tipo1</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Tipo"
                                value={tipo1}
                                onChange={ev => setTipo1(ev.target.value)}
                            />
                            <label>Tipo2</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Tipo"
                                value={tipo2}
                                onChange={ev => setTipo2(ev.target.value)}
                            />
                            <label>Ambiente1</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Ambiente"
                                value={ambiente1}
                                onChange={ev => setAmbiente1(ev.target.value)}
                            />
                            <label>Ambiente2</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Ambiente"
                                value={ambiente2}
                                onChange={ev => setAmbiente2(ev.target.value)}
                            />
                            <label>Atk</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Ataque"
                                value={atk}
                                onChange={ev => setAtk(ev.target.value)}
                            />
                            <label>Def</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Defesa"
                                value={def}
                                onChange={ev => setDef(ev.target.value)}
                            />
                            <label>sta</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="sta"
                                value={sta}
                                onChange={ev => setSta(ev.target.value)}
                            />
                            <label>Lendario</label>
                            <input
                                class="form-control form-control-sm"
                                type="text"
                                placeholder="Lendario"
                                value={lendario}
                                onChange={ev => setLendario(ev.target.value)}
                            />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onSubmit}
                        >
                            Cadastrar
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
