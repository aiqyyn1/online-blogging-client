import React, { useState, ChangeEvent } from 'react';
import { InputType } from '../../interfaces/input.interface';

const Input: React.FC<InputType> = ({
  type,
  placeholder,
  initialValue = '',
  name='',
  onChange,
}) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
