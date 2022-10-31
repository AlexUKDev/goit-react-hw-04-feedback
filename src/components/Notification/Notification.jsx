import PropTypes from 'prop-types';
import { NotificationMassage } from './Notification.Styled';

const Notification = ({ message }) => {
  return <NotificationMassage>{message}</NotificationMassage>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
