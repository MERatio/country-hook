import { useState } from 'react';
import { useField, useCountry } from './hooks';

const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.name) {
    return <div>not found...</div>;
  }

  return (
    <div>
      <h3>{country.name.common} </h3>
      <div>capital {country.capital[0]} </div>
      <div>population {country.population}</div>
      <img
        src={country.flags.svg}
        height="100"
        alt={`flag of ${country.name.common}`}
      />
    </div>
  );
};

const App = () => {
  const nameInput = useField('text');
  const [name, setName] = useState('');
  const [country, setCountry] = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    if (name === '') {
      setCountry({ name: null });
    }
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button type="submit">find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
