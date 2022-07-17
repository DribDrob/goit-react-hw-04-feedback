import { useState } from 'react';
import { Box } from './Box';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  const feedbackIncrement = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log('Invalid option type');
    }
  };
  let total = good + neutral + bad;
  let positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={feedbackIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Box>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   feedbackIncrement = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return this.countTotalFeedback()
//       ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
//       : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.feedbackIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }
