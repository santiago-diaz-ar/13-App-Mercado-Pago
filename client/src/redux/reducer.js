import { GETALLCOUNTRIES } from "./types/types";

const inicialState = {
  Countries: [],
  allCountries: [],
};

const rootReducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    case GETALLCOUNTRIES:
      break;

    default:
      break;
  }
};

export default rootReducer;
