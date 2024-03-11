function createFeedbackRow(data) {
  const arr = Object.entries(data).map(([key, value]) => {
    const firstCapitalLetter = key.charAt(0).toUpperCase() + key.slice(1);
    return (
      <p key={key}>
        {firstCapitalLetter}: {value}
      </p>
    );
  });
  return arr;
}

export default createFeedbackRow;
