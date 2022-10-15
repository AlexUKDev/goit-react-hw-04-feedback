import { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const propNameToUpdate = e.target.id;

    if (propNameToUpdate === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (propNameToUpdate === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFidback = 0;
    const totalFeedback = this.countTotalFeedback();

    positiveFidback = ((this.state.good / totalFeedback) * 100).toFixed();

    return positiveFidback;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            // options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
          <h2>Statistics</h2>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
