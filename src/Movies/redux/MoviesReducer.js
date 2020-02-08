import { MOVIES_ACTIONS } from "./MoviesActions";

export const MoviesReducer = (state, action) => {
  switch (action.type) {
    case MOVIES_ACTIONS.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };

    case MOVIES_ACTIONS.GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };

    case MOVIES_ACTIONS.IS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return {
        ...state
      };
  }
};
