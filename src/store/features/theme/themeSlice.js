import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme', 
    initialState: 'light-theme',
    reducers: {
        themeSwitch(state, action) {
            return action.payload
        }
    }
})

export const selectTheme = (state) => state.theme;

export const {themeSwitch} = themeSlice.actions
export default themeSlice.reducer