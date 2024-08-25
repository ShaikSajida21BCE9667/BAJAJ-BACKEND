import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ setResponse }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const result = await axios.post('https://your-backend-endpoint.com/api', parsedInput);
      setResponse(result.data);
    } catch (error) {
      alert('Invalid JSON or API error');
    }
  };

  return (
    <div>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON'
        rows={5}
        cols={50}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JsonInput;
