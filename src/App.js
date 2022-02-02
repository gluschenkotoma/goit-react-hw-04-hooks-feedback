import { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyles';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // фу-я которая плюсует по каждому типу стейта
  const addFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
    console.log([type]); //['good']
  };
  // фу-я которая плюсует общее ко-во по все типах стейт, тотальное значение кликов по кнопках
  const countTotalFeedback = () => {
    // Object.values возвращает массив значений перечисляемых свойств объекта
    // reduce-возвращает сумму всех элементов в массиве.
    // return Object.values(this.state).reduce((acc, value) => (acc += value), 0);

    return good + neutral + bad;
  };
  // фу-я соотношения хороших стейтов от ощего количества стейтов
  //Math.round возвращает число, округлённое к ближайшему целому.
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  /* Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта */
  /* options - чьи собственные перечисляемые свойства будут возвращены */
  const options = Object.keys(this.state);
  const total = countTotalFeedback();
  return (
    <>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            // options={this.state}
            options={options}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};
export default App;
