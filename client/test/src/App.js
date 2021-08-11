import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [state, setState] = useState()

  const fetchApi = async () => {
    const res = await fetch('http://localhost:8080/test')
    const result = await res.json()
    console.log(result)
    setState(result)
  }
  // useEffect(() => {
  //   fetchApi()
  // }, [])
  return (
    <div className="App">
      {state && <h2>{state[0].name}</h2>}
      {state && <h2>{state[1].name}</h2>}
      <button onClick={fetchApi}>click me</button>
    </div>
  );
}

export default App;
