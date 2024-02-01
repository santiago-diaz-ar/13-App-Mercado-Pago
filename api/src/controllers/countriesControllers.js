const axios = require("axios");

const getAllCountries = async () => {
  const countriesApi = await axios("https://restcountries.com/v3.1/all");
  const countriesManejado = countriesApi.data;
  console.log(countriesManejado);
  return countriesManejado;
};

module.exports = { getAllCountries };
