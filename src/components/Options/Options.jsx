import PropTypes from 'prop-types';
import css from './options.module.css';
import createButton from '../scripts/createButton';

const Options = ({ updateClick, total, reset, type }) => {
  const buttons = createButton(
    ['good', 'neutral', 'bad'],
    updateClick,
    (type = 'button'),
    css.basic,
  );
  const resetButton = createButton(
    ['Reset'],
    reset,
    (type = 'reset'),
    css.reset,
  );

  return (
    <div className={css.wrapper}>
      {total > 0 ? (
        <>
          {buttons}
          {resetButton}
        </>
      ) : (
        <>{buttons}</>
      )}
    </div>
  );
};

Options.propTypes = {
  updateClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Options;
