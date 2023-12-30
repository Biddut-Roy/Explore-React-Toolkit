import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../features/todo/todoSlices.js'

export const store = configureStore({
    reducer: todoReducers,
})

