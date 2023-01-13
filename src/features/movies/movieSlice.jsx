import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (search) => {
  const res = await movieApi.get(`?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&type=movie`);
  return res.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (search) => {
  const res = await movieApi.get(`?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&type=series`);
  return res.data;
});

export const fetchAsyncItemByID = createAsyncThunk("movies/fetchAsyncItemByID", async (id) => {
  const res = await movieApi.get(`?apikey=${import.meta.env.VITE_API_KEY}&i=${id}&Plot=full`);
  return res.data;
});

const initialState = {
  movies: {},
  shows: {},
  itemByID: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedItems: (state) => {
      state.itemByID = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Success");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Success");
      return { ...state, shows: payload };
    },
    [fetchAsyncItemByID.fulfilled]: (state, { payload }) => {
      console.log("Success");
      return { ...state, itemByID: payload };
    },
  },
});

export const { removeSelectedItems } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getItemByID = (state) => state.movies.itemByID;
export default movieSlice.reducer;
