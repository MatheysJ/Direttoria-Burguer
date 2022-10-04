import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { increasePosition } from '../../../store/features/carousel/carouselSlice'

export const CarouselTimer = (props) => {

    const { delay = 5000 } = props

    const dispatch = useDispatch();

    const timerFunction = () => {
    
        setTimeout(()=> {
            dispatch(increasePosition())
            timerFunction()
        }, delay)
        
    }
    
    useEffect(() => {
        timerFunction()
    }, [])
    
    return <></>
}
