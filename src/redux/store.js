import { configureStore } from '@reduxjs/toolkit'
import todoRedux from "./TodoRedux"

export const store = configureStore({
  reducer: {todoRedux},
})