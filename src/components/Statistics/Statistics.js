import { StatisticsWrap, StatisticsItemWrap } from './Statistics.Styled';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <StatisticsWrap>
      <ul>
        <li>
          <StatisticsItemWrap>Good: {good}</StatisticsItemWrap>
        </li>
        <li>
          <StatisticsItemWrap>Neutral: {neutral}</StatisticsItemWrap>
        </li>
        <li>
          <StatisticsItemWrap>Bad: {bad}</StatisticsItemWrap>
        </li>
        {totalFeedback > 0 && (
          <li>
            <StatisticsItemWrap>Total: {totalFeedback}</StatisticsItemWrap>
          </li>
        )}
        {positiveFeedback > 0 && (
          <li>
            <StatisticsItemWrap>
              Positive feedback: {positiveFeedback} %
            </StatisticsItemWrap>
          </li>
        )}
      </ul>
    </StatisticsWrap>
  );
};
export default Statistics;
