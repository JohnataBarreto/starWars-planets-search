import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import swPlanetsApi from './componetes/api';
import SwContext from './swContex';

function StarWarProvider({ children }) {
  const [data, setData] = useState([]);
  const [restoryData, setRestoryData] = useState([]);
  const [filterByName, setName] = useState('');
  const [filterByNumericValues, setFilter] = useState([]);
  const [operador, setOperador] = useState('');
  const [operando, setOperando] = useState(0);
  const [ordenador, setOrdenador] = useState('');
  const [ordem, setOrdem] = useState('');
  const lista = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [fluxo, setFuxo] = useState('add');
  const [opColuna, setOpColuna] = useState(lista);
  const [coluna, setColuna] = useState(opColuna[0]);

  async function getData() {
    const temp = await swPlanetsApi();
    setData(temp.results);
    setOperador('maior que');
    setRestoryData(temp.results);
  }

  useEffect(() => {
    getData();
  }, []);

  function filterData() {
    const temp = restoryData.filter((planet) => planet.name.includes(filterByName));
    setData(temp);
  }

  function filter() {
    if (filterByName.length !== 0) { filterData(); } else { getData(); }
  }

  useEffect(() => {
    filter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByName]);

  function colun(planeta, filtro) {
    if (filtro.column === 'population') return (planeta.population);
    if (filtro.column === 'orbital_period') return (planeta.orbital_period);
    if (filtro.column === 'diameter') return (planeta.diameter);
    if (filtro.column === 'rotation_period') return (planeta.rotation_period);
    if (filtro.column === 'surface_water') return (planeta.surface_water);
    console.log('colun');
  }

  function maior(filtro, temData) {
    setData(temData.filter((planeta) => (colun(planeta, filtro)) > +filtro.value));
    console.log(temData);
  }

  function menor(filtro, temData) {
    setData(temData.filter((planeta) => (colun(planeta, filtro)) < +filtro.value));
  }

  function igual(filtro, temData) {
    setData(temData.filter((planeta) => (colun(planeta, filtro)) === filtro.value));
  }

  function filtrar() {
    console.log('filtrar');
    if (filterByNumericValues.length === 0) {
      setData(restoryData);
    } else {
      let temData;
      if (fluxo === 'add') temData = data;
      if (fluxo === 'sub') temData = restoryData;
      filterByNumericValues.forEach((filtro) => {
        if (filtro.comparison === 'maior que') maior(filtro, temData);
        if (filtro.comparison === 'menor que') menor(filtro, temData);
        if (filtro.comparison === 'igual a') igual(filtro, temData);
      });
    }
  }

  function getColuna({ target }) {
    const valor = target.value;
    setColuna(valor);
  }

  function getOperador({ target }) {
    const valor = target.value;
    setOperador(valor);
  }

  function getOperando({ target }) {
    const valor = target.value;
    setOperando(valor);
  }

  function getOrdenador({ target }) {
    const valor = target.value;
    setOrdenador(valor);
  }

  function getOrdem({ target }) {
    const valor = target.value;
    setOrdem(valor);
  }

  function getName({ target }) {
    const valor = target.value;
    setName(valor);
  }

  function getOpColuna() {
    if (filterByNumericValues.length === 0) {
      setOpColuna(lista);
    } else {
      const usados = filterByNumericValues.map((item) => item.column);
      const valor = opColuna.filter((item) => !usados.includes(item));
      setOpColuna(valor);
    }
  }

  function getFilter() {
    const valor = {
      column: coluna,
      comparison: operador,
      value: operando,
    };
    const temp = [...filterByNumericValues, valor];
    console.log(temp);
    setFilter(temp);
    setFuxo('add');
  }

  function deletFilter({ target }) {
    const delName = target.name;
    const temp = filterByNumericValues.filter((item) => item.column !== delName);
    console.log(temp);
    setFilter(temp);
    setFuxo('sub');
  }

  function limpar() {
    setFilter([]);
  }

  useEffect(() => {
    getOpColuna();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setColuna(opColuna[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opColuna]);

  useEffect(() => {
    filtrar();
    console.log('1');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  const contextValue = {
    data,
    coluna,
    operador,
    operando,
    ordenador,
    ordem,
    filterByName,
    filterByNumericValues,
    opColuna,
    getFilter,
    getName,
    getColuna,
    getOperador,
    getOperando,
    getOrdenador,
    getOrdem,
    filter,
    setFilter,
    filtrar,
    deletFilter,
    limpar,
  };

  return (
    <SwContext.Provider value={ contextValue }>
      { children }
    </SwContext.Provider>
  );
}

StarWarProvider.propTypes = {
  children: PropTypes.objectOf.isRequired,
};

export default StarWarProvider;
