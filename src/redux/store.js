import { configureStore } from '@reduxjs/toolkit';
import oskansReducer from './oskansSlice'; 

export const store = configureStore({
  reducer: {
    oskans: oskansReducer
  },
})