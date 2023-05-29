import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from "./features/feedbackSlice";

export const store = configureStore({
    reducer: {
        feedback: feedbackSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
