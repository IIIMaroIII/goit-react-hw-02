function setToLS(data, key) {
  return window.localStorage.setItem(key, JSON.stringify(data));
}

export default setToLS;
