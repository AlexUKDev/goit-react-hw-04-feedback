import { NotificationMassage } from './Notification.Styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <NotificationMassage>{message}</NotificationMassage>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
