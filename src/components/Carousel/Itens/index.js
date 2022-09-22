import './styles.css'

const CarouselItens = ({ children, width }) => {

    return (
        <div className='carousel__item' style={{ width: '100%'}}>
            {children}
        </div>
    )
}

export default CarouselItens