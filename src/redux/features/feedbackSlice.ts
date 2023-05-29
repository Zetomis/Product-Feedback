import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FeedbackInterface } from "../../interfaces/FeedbackInterface";
import axios from "axios";

interface initialValue {
    feedback: FeedbackInterface[];
    loading: boolean;
    error: string | null;
}

const initialState: initialValue = {
    feedback: [],
    loading: false,
    error: null,
};

export const getFeedbackData = createAsyncThunk(
    "feedback/getFeedbackData",
    async () => {
        const response = await axios.get("http://localhost:8000/feedback-data");
        return response.data;
    }
);

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFeedbackData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFeedbackData.fulfilled, (state, { payload }) => {
                state.feedback = payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getFeedbackData.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error.message || "Something went wrong";
            });
    },
});

export const {} = feedbackSlice.actions;
export default feedbackSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { FeedbackInterface } from "../../interfaces/FeedbackInterface";
// import axios from "axios";

// interface initialValue {
//   feedback: FeedbackInterface[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: initialValue = {
//   feedback: [],
//   loading: false,
//   error: null,
// };

// export const getFeedbackData = createAsyncThunk(
//   "feedback/getFeedbackData",
//   async () => {
//     const response = await axios.get("http://localhost:8000/feedback-data");
//     return response.data;
//   }
// );

// export const feedbackSlice = createSlice({
//   name: "feedback",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getFeedbackData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getFeedbackData.fulfilled, (state, { payload }) => {
//         state.feedback = payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(getFeedbackData.rejected, (state, { error }) => {
//         state.loading = false;
//         state.error = error.message || "Something went wrong";
//       });
//   },
// });

// export default feedbackSlice.reducer;
