import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./Global.css";
import { Modal } from "./Components/Modal";
import Card from "./Components/Card";
import "./Components/Header.css";
import logo from "./assets/images/pokemon.png";
import pokeball from "./assets/images/pokebola.png";
import search from "./assets/images/pesquisar.png";

function App() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  return (
    <>
      <Modal
        className="modal"
        show={show}
        closeModalHandler={closeModalHandler}
      />

      <header className="mb-31 mb-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img src={logo} alt="Logo" width="200px" height="80px" />
            </div>
            <div className="col-sm-5">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  defaultValue="Search..."
                  className="form-control"
                />
                <button type="button" className="btn_search">
                  <img
                    src={search}
                    alt="button search"
                    width="30px"
                    height="20px"
                  />
                </button>
              </div>
            </div>
            <div className="col-sm-3">
              <button
                onClick={() => setShow(true)}
                type="button"
                className="btn_add"
              >
                <img
                  src={pokeball}
                  alt="button add"
                  width="24px"
                  height="24px"
                />
                Add Pokemon
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <Card />
          </div>
        </div>
      </div>

      {/* <div className="teste">
        {show ? (
          <div onClick={closeModalHandler} className="back-drop"></div>
        ) : null}

        <section id="paginate">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <Cards />
              </div>
            </div>
          </div>
          <div className="pagination">
            <div className="first"> &#171;</div>
            <div className="prev"> &lt;</div>
            <div className="numbers">
              <div>1</div>
            </div>
            <div className="next"> &gt;</div>
            <div className="last"> &#187;</div>
          </div>
        </section>
      </div> */}
    </>
  );
}

export default App;
