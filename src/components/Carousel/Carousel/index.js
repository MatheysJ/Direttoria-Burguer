import './styles.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosition } from '../../../store/features/carousel/carouselSlice'
import slides from '../../../common/Slides/data.json'

const Carousel = () => {

    const position =  useSelector(selectPosition)

    return (
        <div className='carousel__box'>
            <div className='inner' style={{ transform: `translateX(${position})` }}>
                {     
                    slides.map((item) => {
                        return (
                            <div className='carousel__item' style={{ width: '100%'}}>                
                                <img alt={item.alt} src={item.src}></img>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel