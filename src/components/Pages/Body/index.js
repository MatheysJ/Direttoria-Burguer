import { useDispatch, useSelector } from 'react-redux'
import { decreasePosition, increasePosition, changePosition ,selectNumberPosition, selectPosition } from '../../../store/features/carousel/carouselSlice'
import Carousel from '../../Carousel/Carousel'
import CarouselItens from '../../Carousel/Itens'
import './styles.css'
import hamburguer from '../../../common/images/hamburguer.jpeg'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import { useEffect } from 'react'

const Body = () => {

    const dispatch = useDispatch();
    const positionNumber =  useSelector(selectNumberPosition)

    function timerFunction() {
        const timer = setTimeout(()=> {
            dispatch(increasePosition())
            timerFunction()
        }, 5000)
        
        return () => {
            clearTimeout(timerFunction)
            timer()
        }
    }

    useEffect(() => {
      timerFunction()
    }, [])

    const increase = () => {
        dispatch(increasePosition())
    }

    const decrease = () => {
        dispatch(decreasePosition())
    }

    const handleClick = (number) => {
        dispatch(changePosition(number))
    }

    return (
        <body>
            <div className='carousel'>

                <div className='carousel__body'>

                    <div className='carousel__arrows carousel__left-arrow' onClick={() => {decrease()}}><BsChevronLeft /></div>

                    <Carousel>
                        <CarouselItens><img alt='Hamburguer promocional' className='carousel-img' src={hamburguer}></img></CarouselItens>
                        <CarouselItens><img alt='Hamburguer promocional' src='https://assets.unileversolutions.com/recipes-v2/230446.jpg' className='carousel-img' ></img></CarouselItens>
                        <CarouselItens><img alt='Hamburguer promocional' src='https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-mobile.jpg' className='carousel-img' ></img></CarouselItens>
                        <CarouselItens><img alt='Hamburguer promocional' src='https://www.minervafoods.com/wp-content/uploads/2018/08/como_fazer_hamburguer_caseiro_1-2.jpg' className='carousel-img' ></img></CarouselItens>
                        <CarouselItens><img alt='Hamburguer promocional' src='https://www.korin.com.br/wp-content/uploads/2020/05/korin-hamburguer-picanha-faca-20190704-horizontal.jpg' className='carousel-img' ></img></CarouselItens>
                    </Carousel>

                    <div className='carousel__arrows carousel__right-arrow' onClick={() => {increase()}}><BsChevronRight /></div>

                </div>

                <div className='carousel__position-indicator'>
                    <span onClick={() => handleClick(0)} style={ positionNumber === 0 ? {'backgroundColor': 'var(--border-color)', 'transform': 'scale(1.3)'} : {}} className='position-indicator'></span>
                    <span onClick={() => handleClick(1)} style={ positionNumber === 1 ? {'backgroundColor': 'var(--border-color)', 'transform': 'scale(1.3)'} : {}} className='position-indicator'></span>
                    <span onClick={() => handleClick(2)} style={ positionNumber === 2 ? {'backgroundColor': 'var(--border-color)', 'transform': 'scale(1.3)'} : {}} className='position-indicator'></span>
                    <span onClick={() => handleClick(3)} style={ positionNumber === 3 ? {'backgroundColor': 'var(--border-color)', 'transform': 'scale(1.3)'} : {}} className='position-indicator'></span>
                    <span onClick={() => handleClick(4)} style={ positionNumber === 4 ? {'backgroundColor': 'var(--border-color)', 'transform': 'scale(1.3)'} : {}} className='position-indicator'></span>
                </div>
            </div>

            <h2>Lanches Promocionais</h2>

        </body>
    )
}

export default Body