import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";
import movieReducer from "./slices/movieSlice";
export const Store = configureStore({
    reducer: {
        counterReducer,
        movieReducer


    }
});