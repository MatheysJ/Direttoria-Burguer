import './styles.css'

import {BsLightbulbOff, BsLightbulb} from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux'
import { selectTheme, themeSwitch } from '../../../store/features/theme/themeSlice'

const SwitchIcon = () => {

    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)

    const switchTheme = () => {
        theme == 'light-theme' ? dispatch(themeSwitch('dark-theme')) : dispatch(themeSwitch('light-theme'))
    }

    return (
        <div className='switch-box' onClick={() => {switchTheme()}}>
            {
                theme == 'light-theme' 
                ?
                <BsLightbulb className='navBar__icon' />
                :
                <BsLightbulbOff className='navBar__icon' />
            }
        </div>
    )
}

export default SwitchIcon