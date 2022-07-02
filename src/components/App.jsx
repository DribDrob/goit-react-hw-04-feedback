import { Feedback } from 'components/Feedback/Feedback';

export const App = () => {
  return (
    <>
      <Feedback />
    </>
  );
};

// Выполни рефакторинг приложения. Состояние приложения должно оставаться в корневом компоненте <App>.

//компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// компонент <FeedbackOptions options={} onLeaveFeedback={}>.
// <Section title="">, который рендерит секцию с заголовком и детей (children). Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.
