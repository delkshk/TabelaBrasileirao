import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";
class Legenda extends Component {
  state = {};
  render() {
    return (
      <div class="legendaComponent">
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

        <ul class="legenda">
          <li>PT - Pontos</li>
          <li>JG - Jogos</li>
          <li>VT - Vitorias</li>
          <li>EP - Empates</li>
          <li>DR - Derrotas</li>
          <li>GP - Gols pró</li>
          <li>GC - Gols contra</li>
          <li>SG - Saldo de gols</li>
          <li>AP - Aproveitamento</li>
        </ul>
        <div className="time pos legenda" data-posicao="15">
          <div className="posicao">
            <span></span>
          </div>
          <div className="nome">
            <span>Time</span>
          </div>
          <div className="infos">
            <span className="variacao manteve"></span>
            <span>PT</span>
            <span>JG</span>
            <span>VT</span>
            <span>EP</span>
            <span>DR</span>
            <span>GP</span>
            <span>GC</span>
            <span>SG</span>
            <span className="aproveitamento">AP</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Legenda;
