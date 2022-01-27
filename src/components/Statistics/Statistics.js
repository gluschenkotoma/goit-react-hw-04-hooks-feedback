import PropTypes from "prop-types";
import s from "./Statistics.module.scss";

export default function Statistics({
  options,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <div>
      {renderStatistics(options)}
      <p className={s.points}>Total: {total}</p>
      {/* countPositiveFeedbackPercentage */}
      <p className={s.points}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

function renderStatistics(options) {
  return options.map((key) => (
    <p className={s.point} key={key}>
      {key}: {options[key]}
    </p>
  ));
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
