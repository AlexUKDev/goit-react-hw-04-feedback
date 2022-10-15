import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.Styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      <FeedbackItem>
        <FeedbackBtn id="good" onClick={onLeaveFeedback}>
          Good
        </FeedbackBtn>
      </FeedbackItem>
      <FeedbackItem>
        <FeedbackBtn id="neutral" onClick={onLeaveFeedback}>
          Neutral
        </FeedbackBtn>
      </FeedbackItem>
      <FeedbackItem>
        <FeedbackBtn id="bad" onClick={onLeaveFeedback}>
          Bad
        </FeedbackBtn>
      </FeedbackItem>
    </FeedbackList>
  );
};

export default FeedbackOptions;
