import PropTypes from 'prop-types';
import css from './description.module.css';

const Description = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Sip Happens Cafe</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

Description.propTypes = {};

export default Description;
