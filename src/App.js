import React, {useState} from "react";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generateStarPattern();
  };

  const generateStarPattern = () => {
    let pattern = '';
    const size = parseInt(inputValue, 10);
    if (!isNaN(size)) {
      for (let i = 1; i <= size; i++) {
        pattern += '*'.repeat(i) + '\n';
      }
      for (let i = size - 1; i >= 1; i--) {
        pattern += '*'.repeat(i) + '\n';
      }
    }
    setSubmitValue(pattern);
    setInputValue(''); // Clear input after submission
  };

  return (
    <>
    <div className="input-box">
      <p>input :  </p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div><pre>{submitValue}</pre></div>
    </>
  );
}


export default App;
