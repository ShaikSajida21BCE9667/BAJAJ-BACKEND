import React from 'react';
import Select from 'react-select';

const DropdownSelect = ({ setSelectedOptions }) => {
  const options = [
    { value: 'Numbers', label: 'Numbers' },
    { value: 'Alphabets', label: 'Alphabets' },
    { value: 'Highest lowercase alphabet', label: 'Highest lowercase alphabet' }
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected.map(option => option.value));
  };

  return (
    <Select
      isMulti
      options={options}
      onChange={handleChange}
    />
  );
};

export default DropdownSelect;
