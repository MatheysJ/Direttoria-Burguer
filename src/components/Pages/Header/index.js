import SwitchIcon from '../../Icons/SwitchIcon'
import './styles.css'

const Header = () => {
    return (
        <nav className='navBar'>
            <ul className='navBar__itens navBar__left-side'>
                <li className='navBar__item'><p>Cardápio</p></li>
                <li className='navBar__item'><p>Promoções</p></li>
                <li className='navBar__item'><p>Item 3</p></li>
            </ul>
            <div className='navBar__right-side'>
                <SwitchIcon />
            </div>
        </nav>
    )
}



export default Header