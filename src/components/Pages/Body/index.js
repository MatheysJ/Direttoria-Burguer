import { useDispatch, useSelector } from 'react-redux'
import { decreasePosition, increasePosition, selectPosition } from '../../../store/features/carousel/carouselSlice'
import Carousel from '../../Carousel/Carousel'
import CarouselItens from '../../Carousel/Itens'
import './styles.css'

const Body = () => {

    const dispatch = useDispatch();
    const position =  useSelector(selectPosition)

    const increase = () => {
        console.log(position)
        dispatch(increasePosition())
    }
    const decrease = () => {
        console.log(position)
        dispatch(decreasePosition())
    }

    return (
        <body>
            <div className='carousel'>
                <span className='carousel__left-arrow' onClick={() => {decrease()}}></span>

                <Carousel>
                    <CarouselItens>Item 1</CarouselItens>
                    <CarouselItens>Item 2</CarouselItens>
                    <CarouselItens>Item 3</CarouselItens>
                    <CarouselItens>Item 4</CarouselItens>
                    <CarouselItens>Item 5</CarouselItens>
                </Carousel>

                <span className='carousel__right-arrow' onClick={() => {increase()}}></span>
            </div>
        </body>
    )
}

export default Body