import React, { useState } from "react";
import "./styles.css";
import useCounter from './components/useCounter';

function Happy() {
  const [count, increment] = useCounter();

  return (
    <>
      <h1>I am happy!</h1>
      <h1 onClick={() => increment()}>{count}</h1>
    </>
  );
}

function Sad() {
  React.useEffect(() => {
    window.alert('hello')

    return () => window.alert('goodbye')
  }, []);

  return <h1>I am sad :(</h1>;
}




export default function App() {
  const [bool, setBool] = useState(true);
  const [bool2, setBool2] = useState(false)
  
  React.useEffect(() => {
    console.log('hit 1')
  }, [bool]);

  React.useEffect(() => {
    console.log('hit 2')
  }, [bool2]);

  return (
    <div className="App">
      <button onClick={() => setBool(!bool)}>toggle mood</button>
      <button onClick={() => setBool2(!bool2)}>change bool2</button>
      {bool ? <Happy /> : <Sad />}
    </div>
  );
}
