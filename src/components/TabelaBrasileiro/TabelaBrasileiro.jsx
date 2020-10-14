import React, { Component } from "react";
import axios from "axios";
import "./TabelaBrasileiro.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div>
        <h2>Tabela brasileirao</h2>

        <div className="classificacao">
          <div className="indice">
            <span class="Libertadores">
              <FontAwesomeIcon icon={faCircle} />
              <b>Libertadores</b>
            </span>
            <span class="Pre-Libertadores">
              <FontAwesomeIcon icon={faCircle} />
              <b>Pré-Libertadores</b>
            </span>
            <span class="Sul-Americana">
              <FontAwesomeIcon icon={faCircle} />
              <b>Sul-Americana</b>
            </span>
            <span class="Rebaixados">
              <FontAwesomeIcon icon={faCircle} />
              <b>Rebaixados</b>
            </span>
          </div>
          {this.state.TabelaBrasileiro.map((time) => (
            <div
              className={"time " + time.posicao}
              key={time.posicao}
              data-posicao={time.posicao}
            >
              <div className="posicao">
                <span>{time.posicao}</span>
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
                  } else{
                    return (
                      <span className="variacao manteve"></span>
                    )
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
                <span>{time.aproveitamento} %</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default JogoAoVivo;
