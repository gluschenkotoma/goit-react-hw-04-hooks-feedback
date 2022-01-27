import React, { Component } from "react";
import { GlobalStyle } from "./components/GlobalStyles";

import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  // фу-я которая плюсует по каждому типу стейта
  addFeedback = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
    console.log([type]); //['good']
  };
  // фу-я которая плюсует общее ко-во по все типах стейт, тотальное значение кликов по кнопках
  countTotalFeedback = () => {
    // Object.values возвращает массив значений перечисляемых свойств объекта
    // reduce-возвращает сумму всех элементов в массиве.
    // return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // фу-я соотношения хороших стейтов от ощего количества стейтов
  //Math.round возвращает число, округлённое к ближайшему целому.
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };
  render() {
    /* Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта */
    /* options - чьи собственные перечисляемые свойства будут возвращены */
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              // options={this.state}
              options={options}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
