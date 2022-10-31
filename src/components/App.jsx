import { useEffect, useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { WrapContainer } from './App.Styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFidback, setPositiveFidback] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const leaveFeedback = e => {
    const updateValue = e.target.name;

    switch (updateValue) {
      case options[0]:
        setGood(prevValue => prevValue + 1);
        break;
      case options[1]:
        setNeutral(prevValue => prevValue + 1);
        break;
      case options[2]:
        setBad(prevValue => prevValue + 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setTotalFeedback(good + neutral + bad);
    setPositiveFidback(((good / totalFeedback) * 100).toFixed());
  }, [good, neutral, bad, totalFeedback]);

  return (
    <WrapContainer>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={leaveFeedback} options={options} />
      </Section>

      <Section title={'Statistics'}>
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={positiveFidback}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </WrapContainer>
  );
};

export default App;
