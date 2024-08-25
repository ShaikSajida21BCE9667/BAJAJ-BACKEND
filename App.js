import React, { useState, useEffect } from 'react';
import JsonInput from './components/JsonInput';
import DropdownSelect from './components/DropdownSelect';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    document.title = "ABCD123"; // Set your roll number as the title
  }, []);

  return (
    <div>
      <h1>Frontend Application</h1>
      <JsonInput setResponse={setResponse} />
      {response && (
        <>
          <DropdownSelect setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;

