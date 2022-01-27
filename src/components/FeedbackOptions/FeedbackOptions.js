import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.scss";

function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log("options", options); //options {good: 0, neutral: 0, bad: 0}
  return (
    <ul>
      {/* Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта */}
      {/* options - чьи собственные перечисляемые свойства будут возвращены */}
      {/* {Object.keys(options).map((key) => (
        <button
          key={key}
          type="button"
          className={s.item}
          // при клике перезаписывает ко-во стейтов по каждому типу отдельно, основываясь на предыдущем ко-ве +1
          onClick={() => {
            onLeaveFeedback(key); //addFeedback
          }}
        >
          {`${key}`}
        </button>
      ))} */}
      {options.map((key) => (
        <li key={key}>
          <button
            type="button"
            feedbackRating={key}
            onClick={() => onLeaveFeedback(key)}
            className={s.item}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
