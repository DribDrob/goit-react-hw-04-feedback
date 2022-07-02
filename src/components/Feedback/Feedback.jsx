import { Component } from 'react';
import { Box } from 'components/Box';
import {
  Title,
  ButtonList,
  ButtonItem,
  Button,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsValue,
} from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();

    return (
      <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
        <Title>Please leave feedback</Title>
        <ButtonList>
          <ButtonItem>
            <Button type="button" onClick={this.goodIncrement}>
              Good
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button" onClick={this.neutralIncrement}>
              Neutral
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button" onClick={this.badIncrement}>
              Bad
            </Button>
          </ButtonItem>
        </ButtonList>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsList>
          <StatisticsItem>
            <StatisticsValue>Good: {good}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsValue>Neutral: {neutral}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsValue>Bad: {bad}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsValue>Total: {total}</StatisticsValue>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsValue>
              Positive feedback: {positivePercent}%
            </StatisticsValue>
          </StatisticsItem>
        </StatisticsList>
      </Box>
    );
  }
}
