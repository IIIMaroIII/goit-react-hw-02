import PropTypes from 'prop-types';
import css from './feedback.module.css';
import createFeedbackRow from '../scripts/createFeedbackRow';

const Feedback = ({ total, percentage, good, neutral, bad }) => {
  return (
    <div>
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {percentage}%</p>
      </>
    </div>
  );
};

Feedback.propTypes = {
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Feedback;
