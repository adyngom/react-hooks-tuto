import React, { useReducer } from "react";
import { MoviesContext } from "./MoviesContext";
import { MoviesReducer } from "./MoviesReducer";
import { MOVIES_ACTIONS } from "./MoviesActions";

export const MoviesState = props => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const getMovies = async (...params) => {
    isLoading();
    console.log(params);
    const url = "https://api.myjson.com/bins/13670w";
    const data = await fetch(url);
    const res = await data.json();
    dispatch({ type: MOVIES_ACTIONS.GET_MOVIES, payload: res });
    return res;
  };

  const isLoading = () => dispatch({ type: MOVIES_ACTIONS.IS_LOADING });

  const { movies, movie, loading } = state;
  return (
    <MoviesContext.Provider
      value={{
        movies,
        movie,
        loading,
        getMovies,
        isLoading
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
