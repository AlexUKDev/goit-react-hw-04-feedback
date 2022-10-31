import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.Styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(itemBtn => {
        return (
          <FeedbackItem key={itemBtn}>
            <FeedbackBtn name={itemBtn} onClick={onLeaveFeedback}>
              {itemBtn}
            </FeedbackBtn>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
