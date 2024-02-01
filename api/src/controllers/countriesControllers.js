const axios = require("axios");

const getAllCountries = async () => {
  const countriesApi = await axios("https://restcountries.com/v3.1/all");
  const countriesManejado = countriesApi.data;
  console.log(countriesManejado);
  return countriesManejado;
};

const getDetailCountries = async (name) => {
  const paisDetailApi = await axios.get(
    `https://restcountries.com/v3.1/name/${name}`
  );
  const paisDetail = paisDetailApi.data;
  return paisDetail;
};

module.exports = { getAllCountries, getDetailCountries };
