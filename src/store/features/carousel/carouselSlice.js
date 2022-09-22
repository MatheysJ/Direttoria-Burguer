import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    position: '0%',
    value: 0,
}

export const carouselSlice = createSlice({
    name: 'carousel', 
    initialState,
    reducers: {
        increasePosition(state, action) {
            console.log("increasePosition triggered")
            if (state.value < 4){
                state.value = state.value + 1
                state.position = `-${state.value}00%`
            } else {
                state.value = 0
                state.position = `0%`
            }
        },
        decreasePosition(state, action) {
            console.log("decreasePosition triggered")
            if (state.value !== 0){
                state.value = state.value - 1
                state.position = `-${state.value}00%`
            } else {
                state.value = 4
                state.position = `-400%`
            }
        }
        //remember to change 4 to max-value later
    }
})

export const selectPosition = (state) => state.carousel.position;
export const selectNumberPosition = (state) => state.carousel.value;

export const {increasePosition, decreasePosition} = carouselSlice.actions
export default carouselSlice.reducer