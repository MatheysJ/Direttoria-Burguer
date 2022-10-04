import Carousel from '../../Carousel/Carousel'
import './styles.css'
import { CarouselTimer } from '../../Carousel/Functions/CarouselTimer'
import { DecreaseArrow, IncreaseArrow } from '../../Carousel/Arrows'
import PositionIndicator from '../../Carousel/PositionIndicator'

const Body = () => {

    return (
        <section className='home-body__section'>

            <CarouselTimer delay={5000} />

            <div className='carousel'>

                <div className='carousel__body'>

                    <DecreaseArrow direction="left" />

                    <Carousel />

                    <IncreaseArrow direction="right" />

                </div>

                <PositionIndicator />

            </div>

            <h2>Lanches Promocionais</h2>

        </section>
    )
}

export default Body