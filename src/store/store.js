import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './features/theme/themeSlice'
import carouselReducer from './features/carousel/carouselSlice'

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action)
        localStorage.setItem('theme', JSON.stringify(getState()))
        return result
    }
  }
  
  const reHydrateStore = () => {
    if (localStorage.getItem('theme') !== null) {
        return JSON.parse(localStorage.getItem('theme'))
    }
  }

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        carousel: carouselReducer,
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
})

export default store