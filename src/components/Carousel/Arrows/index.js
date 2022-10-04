import { useDispatch, useSelector } from 'react-redux'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import { decreasePosition, increasePosition } from '../../../store/features/carousel/carouselSlice'
import './styles.css'

export const IncreaseArrow = (props) => {
    const { direction = 'right' } = props

    const dispatch = useDispatch();

    const increase = () => {
        dispatch(increasePosition())
    }

    if (direction === 'right') {
        return <div className='carousel__arrows carousel__right-arrow' onClick={() => {increase()}}><BsChevronRight /></div>
    }
    return <div className='carousel__arrows carousel__left-arrow' onClick={() => {increase()}}><BsChevronLeft /></div>
} 

export const DecreaseArrow = (props) => {
    const { direction = 'left' } = props

    const dispatch = useDispatch();

    const decrease = () => {
        dispatch(decreasePosition())
    }

    if (direction === 'left') {
        return <div className='carousel__arrows carousel__left-arrow' onClick={() => {decrease()}}><BsChevronLeft /></div>
    }
    return <div className='carousel__arrows carousel__right-arrow' onClick={() => {decrease()}}><BsChevronRight /></div>
    
}