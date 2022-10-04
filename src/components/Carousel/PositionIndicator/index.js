import { useDispatch, useSelector } from 'react-redux'
import { changePosition ,selectNumberPosition, selectNumOfSlides } from '../../../store/features/carousel/carouselSlice'
import './styles.css'

const Points = (index) => {

    const i = index.index

    const dispatch = useDispatch();
    const positionNumber =  useSelector(selectNumberPosition)

    const handleClick = (number) => {
        dispatch(changePosition(number))
    }

    return (
        <span 
            onClick={() => handleClick(i)} 
            style={ positionNumber === i ? {'backgroundColor': 'var(--border-color)', 'transform': 'scale(1.3)'} : {}} 
            className='position-indicator'
        ></span>
    )
}

const PositionIndicators = () => {

    const numSlides = useSelector(selectNumOfSlides)

    const positionsArray = []


    for (let i = 0; i < numSlides; i++) {
        positionsArray.push(<Points index={i} key={i} />)
    }

    return <div className='carousel__position-indicator'>{positionsArray}</div>
}

export default PositionIndicators