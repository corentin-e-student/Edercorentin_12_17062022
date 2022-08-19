import './button_activity.css'
/* import PropTypes from 'prop-types'; */

/**
 * Represents activity button.
 * @param {string} icon_name - Icon name to find the import name.
 * @param {string} icon_alt - Icon name for accessibility
 * @returns {JSX}
 */

const ButtonActivity = ({icon_name, icon_alt}) => (
    <div className='button-activity_background'>
        <img src={icon_name} alt={icon_alt} className='button-activity_icon' />
    </div>
);

export default ButtonActivity;

/* ButtonActivity.propTypes = {
    src: icon_name.['source'],
  } */