import React from 'react';
import SwContext from '../swContex';

function Formulario() {
  return (
    <SwContext.Consumer>
      { ({
        getName,
        getColuna,
        getOperador,
        getOperando,
        getOrdenador,
        getOrdem,
        operando,
        getFilter,
        opColuna,
        limpar,
      }) => (
        <form>
          <input
            type="text"
            placeholder="BUSQUE SEU ALVO PELO NOME AQUI"
            name="setName"
            style={ {
              backgroundColor: 'green',
              color: 'blue',
              textAlign: 'center',
            } }
            onChange={ getName }
            data-testid="name-filter"
          />
          <br />
          <fieldset className="linha1">
            <label htmlFor="coluna">
              Coluna
              {' '}
              <select
                name="coluna"
                style={ {
                  backgroundColor: 'green',
                  color: 'blue',
                  textAlign: 'center',
                } }
                onChange={ getColuna }
                data-testid="column-filter"
              >
                { opColuna.map((item, index) => (
                  <option
                    value={ item }
                    key={ index }
                  >
                    { item }
                  </option>))}
              </select>
            </label>
            <label htmlFor="operador">
              Operador
              {' '}
              <select
                name="operador"
                style={ {
                  backgroundColor: 'green',
                  color: 'blue',
                  textAlign: 'center',
                } }
                onChange={ getOperador }
                data-testid="comparison-filter"
              >
                <option value="maior que" selected>
                  maior que
                </option>
                <option value="menor que">
                  menor que
                </option>
                <option value="igual a">
                  igual a
                </option>
              </select>
            </label>
            <input
              type="number"
              onChange={ getOperando }
              value={ operando }
              style={ {
                backgroundColor: 'green',
                color: 'blue',
                textAlign: 'center',
              } }
              min="0"
              data-testid="value-filter"
            />
          </fieldset>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ getFilter }
            style={ {
              backgroundColor: 'green',
              color: 'blue',
              textAlign: 'center',
            } }
          >
            FILTRAR
          </button>
          <br />
          <fieldset className="linha2">
            <label
              htmlFor="paran"
            >
              Ordenar
              {' '}
              <select
                name="paran"
                style={ {
                  backgroundColor: 'green',
                  color: 'blue',
                  textAlign: 'center',
                } }
                onChange={ getOrdenador }
              >
                { opColuna.map((item, index) => (
                  <option
                    value={ item }
                    key={ index }
                    data-testid="column-sort"
                  >
                    { item }
                  </option>))}
              </select>
            </label>
            <label
              htmlFor="ordem"
              onChange={ getOrdem }
            >
              <input
                type="radio"
                name="ordem"
                value="ASC"
                data-testid="column-sort-input-asc"
                style={ {
                  backgroundColor: 'green',
                  color: 'blue',
                  textAlign: 'center',
                } }
              />
              Ascendente
              <input
                type="radio"
                name="ordem"
                value="DESC"
                data-testid="column-sort-input-desc"
                style={ {
                  backgroundColor: 'green',
                  color: 'blue',
                  textAlign: 'center',
                } }
              />
              Descendente
            </label>
          </fieldset>
          <button
            type="button"
            data-testid="column-sort-button"
            style={ {
              backgroundColor: 'green',
              color: 'blue',
              textAlign: 'center',
            } }
          >
            ORDENAR
          </button>
          <button
            type="button"
            data-testid="button-remove-filters"
            onClick={ limpar }
            style={ {
              backgroundColor: 'green',
              color: 'blue',
              textAlign: 'center',
            } }
          >
            LIMPAR
          </button>
        </form>)}
    </SwContext.Consumer>
  );
}

export default Formulario;
