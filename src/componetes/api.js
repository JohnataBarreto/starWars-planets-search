const swPlanetsApi = async () => {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return (response.ok
    ? Promise.resolve(json)
    : Promise.reject(json));
};

export default swPlanetsApi;
