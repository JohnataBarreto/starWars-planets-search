import React from 'react';
import SwContext from '../swContex';

function Table() {
  return (
    <SwContext.Consumer>
      { ({
        data,
        filterByNumericValues,
        deletFilter,
      }) => (
        <div className="tabFiltro">
          <fieldset>
            BUSCANDO ALVOS POR CARACTERISTICAS
            {
              filterByNumericValues.map((planet, index) => (
                <div
                  key={ index }
                  name={ planet.column }
                  className="filtros"
                  data-testid="filter"
                  style={ {
                    backgroundColor: 'green',
                    color: 'blue',
                  } }
                >
                  { planet.column }
                  {' '}
                  { planet.comparison }
                  {' '}
                  { planet.value }
                  <button
                    type="button"
                    name={ planet.column }
                    onClick={ deletFilter }
                    style={ {
                      backgroundColor: 'red',
                      color: 'yelow',
                    } }
                  >
                    x
                  </button>
                </div>
              ))
            }
          </fieldset>
          <br />
          <div
            style={ {
              textAlign: 'center',
              width: '96%',
              height: '500px',
              overflow: 'scroll',
              alignItems: 'center',
              marginLeft: '2%',
              marginRight: '2%',
            } }
          >
            <table>
              <tr
                className="topo"
                style={ {
                  textAlign: 'center',
                  backgroundColor: 'green',
                  color: 'blue',
                } }
              >
                <th>Name</th>
                <th>Rotation Period</th>
                <th>Orbital Pedriod</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surfece Water</th>
                <th>Population</th>
                <th>Films</th>
                <th>Created</th>
                <th>Edited</th>
                <th>URL</th>
              </tr>
              {
                data.map((planet, index) => (
                  <tr
                    key={ index }
                    style={ {
                      backgroundColor: 'green',
                      color: 'blue',
                    } }
                  >
                    <td
                      data-testid="planet-name"
                    >
                      { planet.name }
                    </td>
                    <td>{ planet.rotation_period }</td>
                    <td>{ planet.orbital_period }</td>
                    <td>{planet.diameter}</td>
                    <td>{ planet.climate }</td>
                    <td>{ planet.gravity }</td>
                    <td>{ planet.terrain }</td>
                    <td>{ planet.surface_water }</td>
                    <td>{ planet.population }</td>
                    <td>{ planet.films }</td>
                    <td>{ planet.created }</td>
                    <td>{ planet.edited }</td>
                    <td>{ planet.url }</td>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>
      ) }
    </SwContext.Consumer>

  );
}

export default Table;
