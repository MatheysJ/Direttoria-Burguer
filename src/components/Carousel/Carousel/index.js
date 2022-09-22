import './styles.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosition } from '../../../store/features/carousel/carouselSlice'

const Carousel = ({ children }) => {

    const position =  useSelector(selectPosition)

    return (
        <div className='carousel__box'>
            <div className='inner' style={{ transform: `translateX(${position})` }}>
                {
                    React.Children.map(children, (child, index) =>{
                        return React.cloneElement(child, { width: "100%"})
                        {/* <div className='carousel__item'> { itens }</div>  */}
                    })}
            </div>
        </div>
    )
}

export default Carousel