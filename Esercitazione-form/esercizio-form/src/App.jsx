import { useState } from 'react';
import './App.css';
import StringStateExample from './components/form';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Modulo Esempio</h1>
        <StringStateExample />
      </div>
    </>
  );
}

export default App;