function createButton(keys, onClick, type, className) {
  const buttonEl = keys.map(key => {
    const firstCapitalLetter = key.charAt(0).toUpperCase() + key.slice(1);
    return (
      <button
        className={className}
        type={type}
        onClick={() => {
          onClick(key);
        }}
        key={key}
      >
        {firstCapitalLetter}
      </button>
    );
  });
  return buttonEl;
}

export default createButton;
