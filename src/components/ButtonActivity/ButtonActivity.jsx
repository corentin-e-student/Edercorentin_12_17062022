import './button_activity.css'
/* import PropTypes from 'prop-types'; */

const ButtonActivity = ({icon_name, icon_alt}) => (
    <div className='button-activity_background'>
        <img src={icon_name} alt={icon_alt} className='button-activity_icon' />
    </div>
);

export default ButtonActivity;

/* ButtonActivity.propTypes = {
    src: icon_name.['source'],
  } */