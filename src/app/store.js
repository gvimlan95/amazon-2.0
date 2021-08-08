import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';

// the global store
// eg: user slice, basket slice
export const store = configureStore({
	reducer: {
		basket: basketReducer,
	},
});
