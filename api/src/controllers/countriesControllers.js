const axios = require("axios");

const { Country } = require("../db");

const getAllCountries = async () => {
  const countriesApi = await axios("https://restcountries.com/v3.1/all");
  const countriesManejado = countriesApi.data;
  console.log(countriesManejado);
  return countriesManejado;
};

const getDetailCountries = async (id) => {
  const paisDetailApi = await axios.get(
    `https://restcountries.com/v3.1/alpha/${id}  `
  );
  const paisDetail = paisDetailApi.data;
  return paisDetail;
};

const getNamePais = async (name) => {
  const paisNameApi = await axios.get(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return paisNameApi;
};

const postPaisDb = async (name) => {
  const creacion = await Country.create({
    name,
  });
  return creacion;
};

module.exports = {
  getAllCountries,
  getDetailCountries,
  getNamePais,
  postPaisDb,
};
