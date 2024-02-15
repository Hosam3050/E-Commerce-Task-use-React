import { createSlice } from "@reduxjs/toolkit";




const counterSlice = createSlice(
    {
        name: "counter",
        initialState:
        {
            count: 1000
        },
        reducers: {
            increaseCounter: (state, action) => {

                state.count += action.payload;
            },
            // eslint-disable-next-line no-unused-vars
            decreaseCounter: (state, action) => {
                console.log("hi from  dec reducers of counter");
            }

        }

    }
)
export const { increaseCounter, decreaseCounter } = counterSlice.actions;

export default counterSlice.reducer;