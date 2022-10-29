import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFidback = 0;
    const totalFeedback = countTotalFeedback();

    positiveFidback = ((good / totalFeedback) * 100).toFixed();

    return positiveFidback;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={leaveFeedback} options={options} />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

export default App;
