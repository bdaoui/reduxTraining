import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", tittle: "Learning Redux", content: "I've heard good things." },
    {id: "2", tittle: "Slices...", content: "I like pizza" }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
})