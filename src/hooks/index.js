import { useState, useEffect } from 'react';
import axios from 'axios';

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (name === '') {
      return;
    }
    const fetchAndSetCountryInfo = async (name) => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        setCountry(response.data[0]);
      } catch (err) {
        setCountry({ name: null });
      }
    };
    fetchAndSetCountryInfo(name);
  }, [name]);

  return [country, setCountry];
};
