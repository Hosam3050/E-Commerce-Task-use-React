import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/instance";

export const getMovie = createAsyncThunk("movie/getAllmovie", async () => {
    let data = await axiosInstance.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c");
    return data.data.results;
})
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        fav: [],
        movies: [],
        loading: true,
        err: false
    },
    reducers: {
        addToFav: (state, action) => {
            state.fav.push({ ...action.payload, quantify: 1 });
        }


        

    },
    extraReducers: (builder) => {
        builder
            // eslint-disable-next-line no-unused-vars
            .addCase(getMovie.pending, (state) => {
                console.log("pending")
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.movies = action.payload;
            })
            // eslint-disable-next-line no-unused-vars
            .addCase(getMovie.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            });
    },
})

export const { addToFav, addToCart} = movieSlice.actions;


export default movieSlice.reducer;


