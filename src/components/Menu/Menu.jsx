import './menu.css'
import Logo from '../../asset/logo.png'
import ButtonActivity from '../ButtonActivity/ButtonActivity';
import YogaIcon from '../../asset/icons/zen.png'
import SwimIcon from '../../asset/icons/swim.png'
import BycicleIcon from '../../asset/icons/bicycle.png'
import GymIcon from '../../asset/icons/gym.png'

const Menu = () => (
    <div className='menu_background'>
        <div className='menu_navbar_top_background'>
            <img src={Logo} alt="logo Sportsee" className='menu_logo' />
            <div className='menu_buttons_top_position'>
                <label className='menu_button_top'>Acceuil</label>
                <label className='menu_button_top'>Profil</label>
                <label className='menu_button_top'>Réglage</label>
                <label className='menu_button_top'>Communauté</label>
            </div>
        </div>
        <div className='menu_navbar_side_background'>
            <div className='menu_buttons_side_position'>
                <ButtonActivity icon_name={YogaIcon} icon_alt="yoga icon"/>
                <ButtonActivity icon_name={SwimIcon} icon_alt="swim icon"/>
                <ButtonActivity icon_name={BycicleIcon} icon_alt="bycicle icon"/>
                <ButtonActivity icon_name={GymIcon} icon_alt="gym icon"/>
            </div>
        </div>
    </div>
);

export default Menu;