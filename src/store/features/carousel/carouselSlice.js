import { createSlice } from '@reduxjs/toolkit'
import slides from '../../../common/Slides/data.json'

const initialState = {
    position: '0%',
    value: 0,
    slides: slides,
    numOfSlides: (slides.length - 1)//O index do último slide
}

export const carouselSlice = createSlice({
    name: 'carousel', 
    initialState,
    reducers: {
        increasePosition(state, action) {
            if (state.value < state.numOfSlides){
                state.value = state.value + 1
                state.position = `-${state.value}00%`
            } else {
                state.value = 0
                state.position = `0%`
            }
        },
        decreasePosition(state, action) {
            if (state.value !== 0){
                state.value = state.value - 1
                state.position = `-${state.value}00%`
            } else {
                state.value = state.numOfSlides
                state.position = `-${state.numOfSlides}00%`
            }
        },
        changePosition(state, action) {
            state.value = action.payload
            state.position = `-${action.payload}00%`
            
        },
        checkSlides(state) {
            state.slides = slides
        }
    }
})

export const selectPosition = (state) => state.carousel.position;
export const selectNumberPosition = (state) => state.carousel.value;
export const selectSlides = (state) => state.carousel.slides;
export const selectNumOfSlides = (state) => (state.carousel.numOfSlides + 1);

export const {increasePosition, decreasePosition, changePosition} = carouselSlice.actions
export default carouselSlice.reducer