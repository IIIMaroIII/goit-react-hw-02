import { useState, useEffect } from 'react';
import './App.css';
import loadFromLS from './components/scripts/loadFromLS';
import setToLS from './components/scripts/setToLS';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const LOCAL_STORAGE_KEY = 'info';

  const [info, setInfo] = useState(() => {
    return loadFromLS(LOCAL_STORAGE_KEY);
  });
  useEffect(() => {
    setToLS(info, LOCAL_STORAGE_KEY);
  }, [info]);

  const totalFeedback = info.good + info.neutral + info.bad;
  const percentage = Math.round(
    ((info.good + info.neutral) / totalFeedback) * 100,
  );

  const handleInfo = type => {
    setInfo(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const onReset = () => {
    setInfo(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  return (
    <>
      <Description />
      <Options reset={onReset} total={totalFeedback} updateClick={handleInfo} />
      {totalFeedback > 0 ? (
        <Feedback
          good={info.good}
          neutral={info.neutral}
          bad={info.bad}
          percentage={percentage}
          total={totalFeedback}
          data={info}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
