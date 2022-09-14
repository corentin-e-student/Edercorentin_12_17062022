import Logo from '../../asset/logo.png';
import ButtonActivity from '../ButtonActivity/ButtonActivity';
import YogaIcon from '../../asset/icons/zen.png';
import SwimIcon from '../../asset/icons/swim.png';
import BycicleIcon from '../../asset/icons/bicycle.png';
import GymIcon from '../../asset/icons/gym.png';
/* import User12 from '../../asset/icons/user12.png';
import User18 from '../../asset/icons/user18.png'; */
import PropTypes from 'prop-types';

import './layout.css'

/**
 * Represents dashboard with charts.
 * @param {Object} children - TrakingActivity of dashboard.
 * @returns {JSX}
 */

const Layout = ({children}) => (
    <div className="layout">
        <div className='menu_navbar_top_background'>
            <img src={Logo} alt="logo Sportsee" className='menu_logo' />
            <div className='menu_buttons_top_position'>
                <label className='menu_button_top'>Acceuil</label>
                <label className='menu_button_top'>Profil</label>
                <label className='menu_button_top'>Réglage</label>
                <label className='menu_button_top'>Communauté</label>
            </div>
        </div>
        <div className="layoutContent">
            <div className='menu_navbar_side_background'>
                <div className='menu_buttons_side_position'>
                {/* <ButtonActivity icon_name={User12} icon_alt="user 18"/>
                    <ButtonActivity icon_name={User18} icon_alt="user 12"/> */}
                    <ButtonActivity icon_name={YogaIcon} icon_alt="yoga icon"/>
                    <ButtonActivity icon_name={SwimIcon} icon_alt="swim icon"/>
                    <ButtonActivity icon_name={BycicleIcon} icon_alt="bycicle icon"/>
                    <ButtonActivity icon_name={GymIcon} icon_alt="gym icon"/>
                </div>
            </div>
            {children}
        </div>
    </div>
)

export default Layout

Layout.prototype = {
    icon_name: PropTypes.string,
    src: PropTypes.string,
  }
