function loadFromLS(key) {
  const savedInfo = window.localStorage.getItem(key);
  if (savedInfo !== null) {
    return JSON.parse(savedInfo);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
}

export default loadFromLS;
