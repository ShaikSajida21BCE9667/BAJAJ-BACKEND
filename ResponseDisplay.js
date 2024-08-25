import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  if (!response) return null;

  const filteredResponse = {};

  if (selectedOptions.includes('Numbers')) {
    filteredResponse.numbers = response.numbers;
  }
  if (selectedOptions.includes('Alphabets')) {
    filteredResponse.alphabets = response.alphabets;
  }
  if (selectedOptions.includes('Highest lowercase alphabet')) {
    filteredResponse.highest_lowercase_alphabet = response.highest_lowercase_alphabet;
  }

  return (
    <div>
      <h3>Filtered Response:</h3>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
