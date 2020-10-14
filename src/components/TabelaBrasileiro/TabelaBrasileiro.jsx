import React, { Component } from "react";
import axios from "axios";
import "./TabelaBrasileiro.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Legenda from "./Legenda";
import {
  faCircle,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

class JogoAoVivo extends Component {
  state = {
    TabelaBrasileiro: [],
  };
  componentDidMount() {
    if (sessionStorage.getItem("Tabela") === null) {
      axios
        .get(`https://api.api-futebol.com.br/v1/campeonatos/10/tabela`, {
          headers: {
            Authorization: "Bearer live_be6c136123f24f36c8c815e39d050e",
          },
        })
        .then((res) => {
          const TabelaBrasileiro = res.data;
          this.setState({ TabelaBrasileiro });
          sessionStorage.setItem("Tabela", JSON.stringify(TabelaBrasileiro));
          console.log("setitem");
        });
    } else {
      const TabelaBrasileiro = JSON.parse(sessionStorage.getItem("Tabela"));
      this.setState({ TabelaBrasileiro });
      console.log("getitem");
    }
  }
  render() {
    return (
      <div class="TabelaBrasileiro">
        <h2>Campeonato Brasileiro</h2>

        <div className="classificacao">
          <Legenda></Legenda>
          <div className="tabela">
            {this.state.TabelaBrasileiro.map((time) => (
              <div
                className={"time pos" + time.posicao}
                key={time.posicao}
                data-posicao={time.posicao}
              >
                <div className="posicao">
                  <FontAwesomeIcon icon={faCircle} />
                  <span>{time.posicao}°</span>
                </div>
                <div className="nome">
                  <span>{time.time.nome_popular}</span>
                </div>
                <div className="infos">
                  {(() => {
                    if (time.variacao_posicao > 0) {
                      return (
                        <span className="variacao positiva">
                          <FontAwesomeIcon icon={faArrowUp} />{" "}
                          {time.variacao_posicao}
                        </span>
                      );
                    } else if (time.variacao_posicao < 0) {
                      return (
                        <span className="variacao negaviva">
                          <FontAwesomeIcon icon={faArrowDown} />{" "}
                          {time.variacao_posicao * -1}
                        </span>
                      );
                    } else {
                      return <span className="variacao manteve"></span>;
                    }
                  })()}
                  <span>{time.pontos}</span>
                  <span>{time.jogos}</span>
                  <span>{time.vitorias}</span>
                  <span>{time.empates}</span>
                  <span>{time.derrotas}</span>
                  <span>{time.gols_pro}</span>
                  <span>{time.gols_contra}</span>
                  <span>{time.saldo_gols}</span>
                  <span className="aproveitamento">
                    {time.aproveitamento} %
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default JogoAoVivo;
