import { useState } from 'react';
import './App.css';
import StringStateExample from './components/form';
import RegistrationForm from './components/RegistrationForm';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Modulo Esempio</h1>
        <StringStateExample />
        <RegistrationForm />
        
    
      </div>
    </>
  );
}

export default App;